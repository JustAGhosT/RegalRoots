import { businessDocs } from "../config/navigation";

export interface DocumentMeta {
    title: string;
    slug: string;
    order: number;
    category?: string;
    related?: string[];
    description?: string;
  }
  
  export interface NavigationCategory {
    name: string;
    documents: DocumentMeta[];
  }

export const getNextDoc = (currentSlug: string): DocumentMeta | null => {
    const currentIndex = businessDocs.findIndex(doc => doc.slug === currentSlug);
    return currentIndex < businessDocs.length - 1 ? businessDocs[currentIndex + 1] : null;
  };
  
  export const getPrevDoc = (currentSlug: string): DocumentMeta | null => {
    const currentIndex = businessDocs.findIndex(doc => doc.slug === currentSlug);
    return currentIndex > 0 ? businessDocs[currentIndex - 1] : null;
  };
  
  export const getRelatedDocs = (currentSlug: string): DocumentMeta[] => {
    const currentDoc = businessDocs.find(doc => doc.slug === currentSlug);
    if (!currentDoc?.related) return [];
    return businessDocs.filter(doc => currentDoc.related?.includes(doc.slug));
  };