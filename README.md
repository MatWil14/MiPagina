# Matias Wilder — Portfolio

Portfolio profesional construido con **React + Vite + Tailwind CSS**.

---

## Puesta en marcha

### 1. Instalar dependencias

```bash
npm install
```

### 2. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el browser.

### 3. Build de producción

```bash
npm run build
```

Los archivos estáticos quedan en `/dist`.

---

## Agregar un nuevo proyecto

Editá **`src/data/projects.json`** y añadí un objeto al array:

```json
{
  "id": 7,
  "name": "Nombre del proyecto",
  "description": "Descripción corta del proyecto (2-3 líneas).",
  "technologies": ["React", "Node.js", "Tailwind CSS"],
  "link": "https://mi-proyecto.vercel.app",
  "featured": true
}
```

- `featured: true` → aparece en el filtro **Destacados**
- `featured: false` → solo en **Todos**

---

## Deploy en Vercel

### Opción A — Desde la CLI

```bash
npm install -g vercel
vercel
```

Seguí los pasos del wizard. Vercel detecta Vite automáticamente.

### Opción B — Desde el dashboard

1. Subí el proyecto a GitHub
2. Entrá a [vercel.com](https://vercel.com) → **New Project**
3. Importá el repositorio
4. Dejá la configuración por defecto (Vercel detecta Vite)
5. Click en **Deploy**

---

## Personalización rápida

| Qué cambiar | Dónde |
|-------------|-------|
| Datos personales (email, LinkedIn) | `src/components/Contact.jsx` y `src/components/Footer.jsx` |
| Proyectos | `src/data/projects.json` |
| Bio y descripción | `src/components/About.jsx` |
| Frases del Hero | `src/components/Hero.jsx` → array `ROLES` |
| Colores y fuentes | `tailwind.config.js` |
| Meta tags SEO | `index.html` |

---

## Stack

- **React 18** — UI
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Estilos
- **CSS Animations** — Efectos y transiciones
- **Intersection Observer** — Scroll reveal
