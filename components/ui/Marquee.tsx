"use client";

import React from 'react';

export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap space-x-8 animate-marquee">
        {children}
        {children}
      </div>
    </div>
  );
}

// Add animation to tailwind.config.js if needed:
// animation: {
//   marquee: 'marquee 25s linear infinite',
// },
// keyframes: {
//   marquee: {
//     '0%': { transform: 'translateX(0)' },
//     '100%': { transform: 'translateX(-50%)' },
//   },
// }, 