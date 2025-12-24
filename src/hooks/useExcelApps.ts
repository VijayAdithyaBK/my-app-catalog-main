import { useQuery } from '@tanstack/react-query';
import * as XLSX from 'xlsx';
import { AppData, Screenshot } from '@/types/app';

interface ExcelRow {
  id: string;
  name: string;
  short_description: string;
  full_description: string;
  problem_solved: string;
  why_it_exists: string;
  how_it_was_built: string;
  type: string;
  status: string;
  tech_stack: string;
  features: string;
  architecture_notes?: string;
  github_url?: string;
  live_url?: string;
  upcoming_features?: string;
  screenshot_urls?: string;
  screenshot_alts?: string;
}

const parseCommaSeparated = (value: string | undefined): string[] => {
  if (!value || typeof value !== 'string') return [];
  return value.split(',').map(item => item.trim()).filter(Boolean);
};

const parseScreenshots = (urls?: string, alts?: string): Screenshot[] => {
  const urlList = parseCommaSeparated(urls);
  const altList = parseCommaSeparated(alts);

  return urlList.map((url, index) => ({
    url,
    alt: altList[index] || `Screenshot ${index + 1}`
  }));
};

const transformRow = (row: ExcelRow): AppData => {
  const now = new Date().toISOString();

  return {
    id: String(row.id || ''),
    name: String(row.name || ''),
    shortDescription: String(row.short_description || ''),
    fullDescription: String(row.full_description || ''),
    problemSolved: String(row.problem_solved || ''),
    whyItExists: String(row.why_it_exists || ''),
    howItWasBuilt: String(row.how_it_was_built || ''),
    type: (row.type as AppData['type']) || 'web',
    status: (row.status as AppData['status']) || 'in-progress',
    techStack: parseCommaSeparated(row.tech_stack),
    features: parseCommaSeparated(row.features),
    architectureNotes: row.architecture_notes,
    githubUrl: row.github_url,
    liveUrl: row.live_url,
    upcomingFeatures: parseCommaSeparated(row.upcoming_features),
    screenshots: parseScreenshots(row.screenshot_urls, row.screenshot_alts),
    createdAt: now,
    updatedAt: now
  };
};

const fetchAppsFromExcel = async (): Promise<AppData[]> => {
  // Use BASE_URL for GitHub Pages deployment
  const baseUrl = import.meta.env.BASE_URL || '/';
  const excelPath = `${baseUrl}data/apps.xlsx`;

  const response = await fetch(excelPath);

  if (!response.ok) {
    console.warn('No apps.xlsx found, returning empty array');
    return [];
  }

  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const rows: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet);

  return rows.map(transformRow).filter(app => app.id && app.name);
};

export const useExcelApps = () => {
  return useQuery({
    queryKey: ['excel-apps'],
    queryFn: fetchAppsFromExcel,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useExcelApp = (id: string) => {
  const { data: apps, ...rest } = useExcelApps();

  return {
    ...rest,
    data: apps?.find(app => app.id === id)
  };
};
