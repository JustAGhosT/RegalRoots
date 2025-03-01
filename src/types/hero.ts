export interface CTA {
    label: string;
    href: string;
  }
  
  export interface HeroProps {
    heading: string;
    subtitle: string;
    ctaLinks?: CTA[];
  }
  