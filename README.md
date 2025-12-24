# DevCatalog - Software Portfolio

A modern, clean portfolio catalog showcasing software projects across multiple platforms.

## 🚀 Features

- **Multi-Platform Support**: Android, iOS, Web Apps, Extensions, Websites, and Internal Tools
- **Interactive Filtering**: Search, filter by platform type and status
- **Excel-Powered**: Manage your projects via a simple Excel file
- **Responsive Design**: Works beautifully on all devices
- **Modern UI**: Clean, developer-focused interface

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **React Router** for navigation
- **XLSX** for Excel file parsing

## 📦 Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📊 Managing Your Apps

Edit the `public/data/apps.xlsx` file to add, update, or remove projects. The Excel file should have the following columns:

- **id**: Unique identifier
- **name**: Project name
- **shortDescription**: Brief description
- **type**: android, ios, web, extension, website, or internal
- **status**: published, beta, development, or archived
- **techStack**: Comma-separated technologies
- **longDescription**: Detailed description (optional)
- **features**: Comma-separated features (optional)
- **screenshots**: Comma-separated image URLs (optional)

## 🌐 Live Demo

Visit the live site: [Your GitHub Pages URL will be here]

## 📄 License

MIT License - feel free to use this for your own portfolio!
