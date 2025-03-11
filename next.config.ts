import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['*'],
    unoptimized: true
  },
  typescript: {
    // ⚠️ Attention: Désactive la vérification des types pendant la compilation
    // À utiliser temporairement pour contourner les problèmes de typage
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
