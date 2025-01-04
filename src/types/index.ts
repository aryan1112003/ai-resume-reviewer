export interface Suggestion {
  title: string;
  description: string;
}

export interface Improvement {
  category: string;
  details: string[];
}

export interface Keywords {
  present: string[];
  missing: string[];
}

export interface ResumeAnalysis {
  score: number;
  suggestions: Suggestion[];
  keywords: Keywords;
  improvements: Improvement[];
}

export interface CareerRoadmap {
  currentLevel: string;
  nextSteps: {
    title: string;
    description: string;
    timeframe: string;
  }[];
  skills: {
    required: string[];
    recommended: string[];
  };
}