import type { Metric } from 'web-vitals';

// Définition du type pour gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

// Fonction pour envoyer les métriques à Google Analytics
// https://nextjs.org/docs/app/building-your-application/optimizing/analytics
export function reportWebVitals(metric: Metric): void {
  // Log en développement
  console.log(metric);

  // Fonction pour envoyer à GA4
  const reportWebVitalsToGA = ({ name, delta, value, id }: Metric): void => {
    // Pour Google Analytics 4 moderne
    window.gtag?.('event', name, {
      value: delta, // en millisecondes
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    });
  };

  // N'envoyer à GA qu'en production
  if (process.env.NODE_ENV !== 'development') {
    reportWebVitalsToGA(metric);
  }
} 