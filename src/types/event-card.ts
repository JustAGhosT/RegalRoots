export type EventCardVariant = 'default' | 'compact' | 'detailed' | 'minimal';

export interface EventCardProps {
  variant?: EventCardVariant;
  title: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
  category?: string;
  author?: string;
  imageUrl?: string;
}