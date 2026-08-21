# Rishikesh Priyadarshi — Portfolio

A personal developer portfolio built with **React 19** and **Vite**, featuring an interactive AI-style chat widget, animated project showcase, custom cursor, and a fully responsive glassmorphic UI.

**Live demo:** _add your deployed URL here_
**Author:** Rishikesh Priyadarshi — BCA Student, Dev Sanskriti Vishwavidyalaya, Haridwar

---

## ✨ Features

- **Interactive "Ask Me Anything" chatbox** — a mock AI assistant on the hero section with suggested prompts (tech stack, services, projects, location). Unmatched questions are forwarded straight to email via a pre-filled `mailto:` link.
- **Custom cursor** — a dot + ring cursor that follows mouse movement across the page.
- **Animated project showcase** — a "Selected Work" grid with a **See More / See Less** toggle to progressively reveal additional projects.
- **Services section** — four service cards (Website Development, Web Applications, Python Automation, UI & Digital Design) with icon badges and tag chips.
- **About & Skills section** — bio plus categorized skill tags (Frontend, Backend & Data, Tools & Design).
- **Contact section** — direct email CTA and social links (GitHub, LinkedIn, Instagram).
- **Downloadable CV** — linked directly from the hero section (`/cv.pdf`).
- **Click-outside & scroll-to-top handling** via React refs and effects.

---

## 🛠️ Tech Stack

| Layer          | Technology                          |
|----------------|--------------------------------------|
| Framework      | React 19                             |
| Build tool     | Vite 8                               |
| Language       | JavaScript (JSX)                     |
| Styling        | Plain CSS (`App.css`, `index.css`)   |
| Linting        | ESLint 10 (+ React Hooks / Refresh plugins) |

---

## 📁 Project Structure

```
rishikesh-portfolio/
├── public/
│   ├── cv.pdf              # Downloadable resume
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── hero.png
│   │   ├── ai-project.png
│   │   ├── yoga-project.png
│   │   └── democratic-project.png
│   ├── App.jsx              # Main page: hero, projects, services, about, contact
│   ├── App.css               # Component-level styles
│   ├── index.css              # Global styles
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── package-lock.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd rishikesh-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app locally with hot module reloading (default: `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

Outputs an optimized, production-ready build to the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🖼️ Featured Projects (shown in the app)

1. **AI Research Paper Similarity Detector** — Python, Flask, NLP, embeddings. Detects semantically similar/duplicate research papers.
2. **YogaConnect** — WordPress/CMS community platform bridging traditional yoga knowledge with digital accessibility.
3. **Democratic Insights** — HTML5, CSS3, JavaScript, Python. A political consulting and public affairs platform with modular service pages and automation scripts.

---

## 📬 Contact

- **Email:** rishikeshp290704@gmail.com
- **GitHub:** [C0DEXTESTER](https://github.com/C0DEXTESTER)
- **LinkedIn:** [rishikesh-priyadarshi](http://www.linkedin.com/in/rishikesh-priyadarshi-207a03346)
- **Instagram:** [@007_rishikeshpriyadarshi](https://instagram.com/007_rishikeshpriyadarshi)

---

## 📄 License

This project is personal portfolio source code. Feel free to reference the structure, but please don't reuse the personal content, images, or branding as your own.

---

## 🙏 Acknowledgements

Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
