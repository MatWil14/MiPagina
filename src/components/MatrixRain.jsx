import { useEffect, useRef } from 'react'

const CODE_CHARS = 'const function return { } => async await import export class extends interface type any void null true false if else for while do switch case break continue'
  .split(' ')
  .join('')

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(0)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = '#16A34A'

      for (let i = 0; i < drops.length; i++) {
        const char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        if (Math.random() > 0.98) {
          ctx.fillStyle = '#7C3AED'
        } else {
          ctx.fillStyle = '#16A34A'
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      requestAnimationFrame(draw)
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    draw()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-40"
      style={{ display: 'block', right: 0, width: '40%', left: 'auto' }}
    />
  )
}
