# Apps Catalog

This folder contains the Excel file that powers the app catalog.

## Excel File Structure (apps.xlsx)

Create an Excel file named `apps.xlsx` with the following columns:

| Column | Required | Description |
|--------|----------|-------------|
| id | Yes | Unique identifier (e.g., "my-app-1") |
| name | Yes | App name |
| short_description | Yes | Brief description (1-2 sentences) |
| full_description | Yes | Detailed description |
| problem_solved | Yes | What problem does this app solve? |
| why_it_exists | Yes | Why was this app created? |
| how_it_was_built | Yes | Technical details on how it was built |
| type | Yes | One of: android, ios, web, extension, website, internal |
| status | Yes | One of: live, in-progress, archived |
| tech_stack | Yes | Comma-separated list (e.g., "React,TypeScript,Tailwind") |
| features | Yes | Comma-separated list of features |
| architecture_notes | No | Optional architecture documentation |
| github_url | No | GitHub repository URL |
| live_url | No | Live deployment URL |
| upcoming_features | No | Comma-separated list of planned features |
| screenshot_urls | No | Comma-separated image URLs |
| screenshot_alts | No | Comma-separated alt texts (same order as URLs) |

## Example Row

```
id: portfolio-tracker
name: Portfolio Tracker
short_description: Track your investment portfolio
full_description: A comprehensive portfolio tracking application...
type: web
status: live
tech_stack: React,TypeScript,Supabase
features: Real-time updates,Charts,Export to CSV
screenshot_urls: https://example.com/img1.png,https://example.com/img2.png
screenshot_alts: Dashboard view,Settings page
```

Place your `apps.xlsx` file in this folder (public/data/).
