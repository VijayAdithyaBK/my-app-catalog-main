export type AppType = 'android' | 'ios' | 'web' | 'extension' | 'website' | 'internal';
export type AppStatus = 'live' | 'in-progress' | 'archived';

export interface Screenshot {
  url: string;
  alt: string;
}

export interface AppData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  whyItExists: string;
  howItWasBuilt: string;
  type: AppType;
  status: AppStatus;
  techStack: string[];
  features: string[];
  architectureNotes?: string;
  screenshots: Screenshot[];
  githubUrl?: string;
  liveUrl?: string;
  upcomingFeatures?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  appId: string;
  type: 'bug' | 'feature' | 'general';
  title: string;
  description: string;
  email?: string;
  rating?: number;
  createdAt: string;
  reply?: string;
  repliedAt?: string;
}
