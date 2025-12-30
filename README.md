<a name="readme-top"></a>

<div align="center">

# 🚀 DevCatalog

### A Modern, Excel-Driven Software Portfolio

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-blue?style=for-the-badge)](https://vijayadithyabk.github.io/my-app-catalog-main/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=for-the-badge&logo=github)](https://github.com/VijayAdithyaBK/my-app-catalog-main)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<p align="center">
  <a href="#about-the-project">About</a> •
  <a href="#key-features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#managing-content">Manage Content</a> •
  <a href="#project-structure">Architecture</a>
</p>

</div>

---

<a name="about-the-project"></a>
## 📖 About The Project

**DevCatalog** is a production-ready portfolio application designed to showcase software development projects in a professional, scalable way. Unlike static portfolio sites, this is a **dynamic, data-driven application** that demonstrates real-world application architecture.

I built this project to solve a common problem: **maintaining a portfolio shouldn't require coding**. With DevCatalog, you can update your entire portfolio by simply editing an Excel file, while still presenting a high-performance, polished UI to recruiters and clients.

### 🎯 Why It Matters
*   **For Recruiters**: Demonstrates full-stack capabilities, from CI/CD pipelines to complex React state management.
*   **For Founders**: Shows ability to ship polished products with focus on UX and scalability.
*   **For Developers**: Provides a clean, forkable template to showcase your work without the hassle.

[View Live Demo](https://vijayadithyabk.github.io/my-app-catalog-main/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="key-features"></a>
## ✨ Key Features

### 🎨 Modern UI/UX
*   **Professional Design**: Clean aesthetics with a custom favicon and smooth animations.
*   **Responsive**: Flawless experience on mobile, tablet, and desktop.
*   **Dark Mode**: Optimized for developer aesthetics.

### 🔍 Smart Filtering
*   **Real-time Search**: Instantly find projects by name or stack.
*   **Multi-Faceted Filters**: Combine Platform (iOS, Web, etc.) and Status (Published, Beta) filters.

### 📊 Excel-CMS
*   **Zero-Code Updates**: Manage projects via `public/data/apps.xlsx`.
*   **Rich Data**: Supports screenshots, tech tags, descriptions, and links.

### 🚀 Production Highlights
*   **SEO Optimized**: Proper meta tags and structure.
*   **High Performance**: Code splitting, lazy loading, and caching strategies.
*   **Automated Deployment**: GitHub Actions handling CI/CD to GitHub Pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="tech-stack"></a>
## 🛠️ Tech Stack

### Frontend Core
*   ![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB) **React 18** - Component-based UI.
*   ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** - Type safety.
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - High-speed build tool.

### Styling & UI
*   ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Utility-first styling.
*   ![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcnui&logoColor=white) **shadcn/ui** - Accessible component primitives.

### State & Logic
*   ![React Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=react-query&logoColor=white) **TanStack Query** - Data fetching and caching.
*   ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white) **Zod** - Schema validation.
*   ![SheetJS](https://img.shields.io/badge/SheetJS-217346?style=flat&logo=microsoftexcel&logoColor=white) **SheetJS (XLSX)** - Excel file parsing.

### Infrastructure
*   ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) **GitHub Actions** - CI/CD pipeline.
*   ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white) **GitHub Pages** - Hosting.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="getting-started"></a>
## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/VijayAdithyaBK/my-app-catalog-main.git
    cd my-app-catalog-main
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Start development server**
    ```sh
    npm run dev
    ```
    Visit `http://localhost:8080` to view.

4.  **Build for production**
    ```sh
    npm run build
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="managing-content"></a>
## 📊 Managing Content

The core power of DevCatalog is its Excel-based CMS. 

1.  Navigate to `public/data/apps.xlsx`.
2.  Open the file in Excel, Google Sheets, or LibreOffice.
3.  Edit the rows:
    *   **id**: Unique identifier.
    *   **name**: Project title.
    *   **type**: `android`, `ios`, `web`, `extension`, `website`, `internal`.
    *   **status**: `published`, `beta`, `development`, `archived`.
    *   **tech_stack**: Comma-separated list of technologies.
4.  Save and commit the changes. The site updates automatically on next deploy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="project-structure"></a>
## 📁 Project Structure & Architecture

```
my-app-catalog-main/
├── .github/workflows/     # CI/CD: Automated deployment to GH Pages
├── public/                # Static Assets
│   └── data/apps.xlsx     # The "Database"
├── src/
│   ├── components/        # UI Components (Cards, Filters, Layout)
│   ├── hooks/             # Custom Logic (useExcelApps, useFilters)
│   ├── types/             # TS Definitions
│   └── lib/               # Utilities (Excel parsing, Zod schemas)
└── vite.config.ts         # Build Config
```

### Key Technical Decisions
*   **Why Excel?** To decouple content management from code, allowing updates without touching React components.
*   **Why GitHub Pages?** Zero-cost, high-reliability hosting that serves static assets perfectly.
*   **Why React Query?** To effectively cache the "database" (Excel file) and handle loading/error states gracefully.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🤝 Let's Connect

**Vijay Adithya B K**

*   🌐 [Portfolio Website](https://vijayadithyabk.github.io/my-app-catalog-main/)
*   💼 [GitHub Profile](https://github.com/VijayAdithyaBK)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

<p align="center">
  <i>⚡ Crafted by Vijay Adithya B K</i>
</p>

</div>
