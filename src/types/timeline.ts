// src/types/timeline.ts
export interface TimelineItem {
    year: number;
    event: string;
    description?: string;
    icon?: string;
    status?: 'completed' | 'current' | 'upcoming';
  }
  