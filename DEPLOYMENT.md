# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your DevCatalog to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer

## Step-by-Step Deployment

### 1. Initialize Git Repository

Open your terminal in the project directory and run:

```bash
git init
git add .
git commit -m "Initial commit: DevCatalog with custom favicon and scroll-to-top"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `my-app-catalog-main` (or any name you prefer)
3. **Do NOT** initialize it with README, .gitignore, or license (we already have these)

### 3. Connect to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-app-catalog-main.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. The deployment will start automatically!

### 5. Update Base Path (if needed)

If you named your repository something other than `my-app-catalog-main`, update the `base` path in `vite.config.ts`:

```typescript
base: mode === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

Then commit and push:

```bash
git add vite.config.ts
git commit -m "Update base path for GitHub Pages"
git push
```

### 6. Access Your Site

After the deployment completes (check the **Actions** tab), your site will be available at:

```
https://YOUR_USERNAME.github.io/my-app-catalog-main/
```

## 🔄 Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

## ⚙️ What Was Set Up

- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Vite base path configuration for GitHub Pages
- ✅ Automatic deployment on push to main branch
- ✅ Production build optimization

## 🐛 Troubleshooting

**Issue**: Images or assets not loading
- **Solution**: Make sure all asset paths are relative (start with `/` or `./`)

**Issue**: 404 on page refresh
- **Solution**: GitHub Pages works best with hash routing or a 404.html fallback

**Issue**: Deployment fails
- **Solution**: Check the Actions tab for error logs, ensure all dependencies are in `package.json`

## 📝 Notes

- The first deployment may take 2-3 minutes
- Subsequent deployments are faster (1-2 minutes)
- You can also manually trigger deployment from the Actions tab

Happy deploying! 🎉
