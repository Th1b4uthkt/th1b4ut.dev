import { Metadata } from 'next';

// Redéfinir les types pour les pages dynamiques dans Next.js 15.2
declare module 'next' {
  export interface PageProps {
    params: any;
    searchParams?: any;
  }
} 