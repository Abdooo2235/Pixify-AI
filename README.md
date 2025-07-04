# Pixify-AI

[![Build](https://img.shields.io/github/actions/workflow/status/Abdooo2235/Pixify-AI/ci.yml?branch=main)](https://github.com/Abdooo2235/Pixify-AI/actions)
[![License](https://img.shields.io/github/license/Abdooo2235/Pixify-AI)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/Abdooo2235/Pixify-AI)](https://github.com/Abdooo2235/Pixify-AI/graphs/contributors)

Pixify-AI is a modern, AI-powered image upscaler web application. Effortlessly enhance and upscale your images using advanced machine learning, all from a beautiful and intuitive interface.

## Demo ✨
This is [Live Demo](https://pixify-ai-cm6o.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Serving Production Build](#serving-production-build)
- [Contributing](#contributing)
- [Contact & Support](#contact--support)

---

## Features

- 🚀 **AI Image Upscaling:** Enhance and upscale images with state-of-the-art AI models.
- 🖼️ **Batch Processing:** Upload and process multiple images at once.
- 🔒 **Secure & Private:** All images are processed securely and deleted after enhancement.
- ⚡ **Fast Processing:** Optimized backend for quick results.
- 📊 **Admin Dashboard:** Manage users, monitor processing, and configure system settings.
- 💳 **Flexible Pricing:** Multiple subscription plans for individuals and businesses.
- 📱 **Responsive UI:** Beautiful, mobile-friendly interface built with React and Tailwind CSS.
- 🔌 **API Access:** Integrate Pixify-AI into your own apps (Professional/Enterprise plans).
- 🌐 **Easy Deployment:** Ready for Vercel, Netlify, or custom servers.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abdooo2235/Pixify-AI.git
   cd Pixify-AI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Running Locally

### Development Mode

Start the Vite development server:

```bash
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## Building for Production

Build the optimized production bundle:

```bash
npm run build
```

The static files will be output to the `dist/` directory.

---

## Serving Production Build

### With Express and HTTPS

1. **Ensure you have SSL certificates** (`pixify-ai.local.pem` and `pixify-ai.local-key.pem` in the project root).

2. **Start the Express server:**

   ```bash
   npm run serve
   ```

   - The server will serve the production build over HTTPS (default: [https://localhost:3000](https://localhost:3000)).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a [pull request](https://github.com/Abdooo2235/Pixify-AI/pulls)

Please read the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [CONTRIBUTING.md](CONTRIBUTING.md) if available.

---

## Contact & Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/Abdooo2235/Pixify-AI/issues)
- **Author:** [Abdooo2235](https://github.com/Abdooo2235)
- **Email:** abdalrhmantheiv15@gmail.com

---

_Thank you for using Pixify-AI!_
