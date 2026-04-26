<div align="center">
  <h1>🛒 Amazon Lite — Calm Commerce</h1>
  <p>A minimal, intentional, and highly performant e-commerce frontend experience.</p>
  
  <p>
    <a href="#live-demo"><b>View Live Demo</b></a> •
    <a href="#features"><b>Features</b></a> •
    <a href="#getting-started"><b>Getting Started</b></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  </p>
</div>

---

## 🌟 Overview

**Amazon Lite** is a conceptual redesign of the traditional e-commerce experience, built around the "Calm Commerce" design philosophy. It removes clutter, focuses on intentional purchasing, and provides a soothing, high-performance interface.

Built entirely with **Vanilla JavaScript (ES Modules)** and **Vanilla CSS**. No frameworks, no bundlers, zero dependencies. Just clean, modular, and fast web standards.

![Amazon Lite Preview](https://amazon-lite-five.vercel.app/favicon.ico) *(A minimal, intentional, and highly performant e-commerce frontend experience)*

## 🚀 Live Demo

**[👉 Click here to view the live site](https://amazon-lite-five.vercel.app/)**

## ✨ Features

- **Component-Based Architecture:** Despite being vanilla JS, the code is heavily modularized into reusable DOM-generating components.
- **CSS Design System:** Pixel-perfect implementation of the Calm Commerce design using a robust CSS custom properties (variables) architecture.
- **Dynamic Data Rendering:** Products and categories are mapped dynamically from JS data structures.
- **State Management & Persistence:**
  - 🛒 **Cart Store:** Add, remove, and update quantities. Persists to `localStorage`.
  - 🌗 **Theme Store:** Elegant Light & Dark modes based on user preference or system settings. Persists to `localStorage`.
  - 👁️ **Focus Mode:** A custom toggle that dims non-essential UI to help users focus strictly on products.
- **High Performance:**
  - Native `loading="lazy"` on all images.
  - Native `IntersectionObserver` for performant scroll-triggered animations (no heavy animation libraries).
  - CSS Skeleton loading states to prevent layout shift.
- **Modern UI Patterns:** Slide-out cart drawer, animated toast notifications, and smooth micro-interactions.

## 🛠️ Tech Stack

- **HTML5:** Semantic architecture and accessibility.
- **CSS3:** Custom properties, CSS Grid/Flexbox layouts, fluid typography, and keyframe animations.
- **JavaScript (ES6+):** ES Modules, DOM manipulation, custom event dispatching for reactivity.
- **Material Symbols:** Google's icon library via CDN.

## 📁 Project Structure

```text
├── index.html                    # App shell
├── main.js                       # Entry point & router bootstrap
└── src/
    ├── components/               # Reusable UI elements (Hero, Navbar, Grid, etc.)
    ├── data/                     # Mock JSON data for products/categories
    ├── pages/                    # Route composers (Home.js)
    ├── store/                    # State management (cart, theme, focus)
    ├── styles/                   # CSS Design system (variables, globals)
    └── utils/                    # Helpers (SPA Router, IntersectionObserver)
```

## 💻 Getting Started (Local Development)

Because this project relies on ES Modules (`<script type="module">`), it must be served over `http://` or `https://` (it will not work by simply double-clicking the `index.html` file).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/amazon-lite-calm-commerce.git
   cd amazon-lite-calm-commerce
   ```

2. **Run a local web server.** If you have Node.js installed, you can use `npx`:
   ```bash
   npx live-server
   ```
   *(Alternatively, you can use the VS Code "Live Server" extension or Python's `python -m http.server`)*

3. **Open your browser** to `http://127.0.0.1:8080` (or the port provided by your server).

## 🚀 Deployment

This project is deployed on **Vercel** and is a completely static, serverless frontend. Because it utilizes native ES Modules and modern web standards with zero build step, deployments are practically instantaneous.

## 🎨 Design Philosophy (Calm Commerce)

- **Minimalist Aesthetic:** High-quality presentation with generous whitespace.
- **Restrained Color Palette:** Strict adherence to semantic color variables to ensure perfect contrast in both Light and Dark modes.
- **Typography:** Leveraging the "Inter" typeface for a clean, readable rhythm.
- **Soft Geometry:** 12px default corner radius balancing technical precision with approachability.
