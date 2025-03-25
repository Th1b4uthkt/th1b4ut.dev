import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
};

export const metadata: Metadata = {
  title: "Th1b4ut - Développeur Web Full-Stack & Solutions IA",
  description: "Développeur freelance spécialisé en NextJS, React et intégration IA. Je construis des applications web performantes et des solutions numériques innovantes.",
  keywords: ["développeur web", "freelance", "NextJS", "React", "IA", "langchain", "full-stack", "TypeScript"],
};

// Activer le suivi des Web Vitals
export function reportWebVitals(metric: unknown) {
  // Importer de manière dynamique pour éviter de charger au SSR
  import('./reportWebVitals').then((mod) => {
    mod.reportWebVitals(metric as import('web-vitals').Metric);
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preload des ressources critiques */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Ajout des balises meta pour améliorer l'accessibilité et SEO */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        
        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Google Analytics - chargé en priorité reportWebVitals */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
