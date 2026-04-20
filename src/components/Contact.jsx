import { useState } from 'react'

const EMAIL    = 'Matiwilder07@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/mat%C3%ADaswilder'

const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' }

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(STATUS.IDLE)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(STATUS.LOADING)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Contacto desde portfolio — ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: '',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus(STATUS.SUCCESS)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(STATUS.IDLE), 6000)
      } else {
        setStatus(STATUS.ERROR)
        setTimeout(() => setStatus(STATUS.IDLE), 5000)
      }
    } catch {
      setStatus(STATUS.ERROR)
      setTimeout(() => setStatus(STATUS.IDLE), 5000)
    }
  }

  const isLoading = status === STATUS.LOADING
  const inputBase = `w-full bg-white border rounded-xl px-4 py-3 text-dark placeholder-muted/60 text-sm focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
    isLoading ? 'border-slate-200' : 'border-slate-200 focus:border-accent/50 focus:ring-accent/20'
  }`

  return (
    <section id="contacto" className="relative py-24 px-4 bg-surface-2 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        <div className="mb-14 reveal">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Hablemos</p>
          <h2 className="section-title font-heading font-bold text-3xl sm:text-5xl text-dark">
            Contacto
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-lg leading-relaxed mt-6">
            ¿Tenés un proyecto en mente? Escribinos y lo charlamos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info cards */}
          <div className="space-y-5 reveal-left">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-accent/30 hover:shadow-card transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors duration-200">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted/70 uppercase tracking-wide mb-0.5 font-medium">Email</p>
                <p className="text-dark text-sm font-semibold">{EMAIL}</p>
              </div>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#0A66C2]/30 hover:shadow-card transition-all duration-200 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#0A66C2] shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A66C2]/15 transition-colors duration-200">
                <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted/70 uppercase tracking-wide mb-0.5 font-medium">LinkedIn</p>
                <p className="text-dark text-sm font-semibold">Matías Wilder</p>
              </div>
            </a>

            <div className="flex items-center gap-3 pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-muted text-sm font-medium">Disponibles para nuevos proyectos</span>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">

            {/* Success state */}
            {status === STATUS.SUCCESS && (
              <div className="bg-white border border-accent/30 rounded-2xl p-8 flex flex-col items-center gap-4 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-1">¡Mensaje enviado!</h3>
                  <p className="text-muted text-sm">Nos ponemos en contacto a la brevedad. ¡Gracias!</p>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === STATUS.ERROR && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-700 text-sm">
                  Hubo un error al enviar. Intentá de nuevo o escribime directamente a{' '}
                  <a href={`mailto:${EMAIL}`} className="underline font-medium">{EMAIL}</a>
                </p>
              </div>
            )}

            {/* Form (hidden on success) */}
            {status !== STATUS.SUCCESS && (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-card"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wide">
                      Nombre
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Tu nombre"
                      value={form.name} onChange={handleChange}
                      disabled={isLoading}
                      className={inputBase}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="tu@email.com"
                      value={form.email} onChange={handleChange}
                      disabled={isLoading}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required
                    placeholder="Contame sobre tu proyecto..."
                    value={form.message} onChange={handleChange}
                    disabled={isLoading}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Honeypot anti-spam (hidden) */}
                <input type="checkbox" name="botcheck" className="hidden" readOnly />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isLoading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="text-center text-muted/50 text-xs">
                  El mensaje llega directamente a mi email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
