import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "5": "hsla(var(--primary) / 0.05)",
          "10": "hsla(var(--primary) / 0.1)",
          "20": "hsla(var(--primary) / 0.2)",
          "30": "hsla(var(--primary) / 0.3)",
          "40": "hsla(var(--primary) / 0.4)",
          "50": "hsla(var(--primary) / 0.5)",
          "60": "hsla(var(--primary) / 0.6)",
          "70": "hsla(var(--primary) / 0.7)",
          "80": "hsla(var(--primary) / 0.8)",
          "90": "hsla(var(--primary) / 0.9)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "10": "hsla(var(--secondary) / 0.1)",
          "20": "hsla(var(--secondary) / 0.2)",
          "30": "hsla(var(--secondary) / 0.3)",
          "40": "hsla(var(--secondary) / 0.4)",
          "50": "hsla(var(--secondary) / 0.5)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          "10": "hsla(var(--accent) / 0.1)",
          "20": "hsla(var(--accent) / 0.2)",
          "30": "hsla(var(--accent) / 0.3)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.30), 0 0 20px theme(colors.primary.20)',
        'neon-strong': '0 0 5px theme(colors.primary.50), 0 0 20px theme(colors.primary.30), 0 0 40px theme(colors.primary.20)',
        'glow': '0 0 20px rgba(var(--primary-rgb), 0.35)',
        'glow-accent': '0 0 20px rgba(var(--accent-rgb), 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-angular': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-small-black': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' opacity=\'0.2\'%3E%3Cpath d=\'M0 0h24v24H0z\' stroke-width=\'0.4\'/%3E%3C/svg%3E")',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "float": {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        "pulse-subtle": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        "scale-fade-in": {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "fade-in-up": {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        "gradient-flow": {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        "glow-pulse": {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(var(--primary-rgb), 0.2), 0 0 15px rgba(var(--primary-rgb), 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.4), 0 0 30px rgba(var(--primary-rgb), 0.2)' 
          },
        },
        "shimmer": {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        "tilt": {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        "rotate-full": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "rotate-reverse": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        "blinking-cursor": {
          '0%, 100%': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: 'currentColor' },
        },
        "neon-flicker": {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 7px rgba(var(--primary-rgb), 0.7), 0 0 10px rgba(var(--primary-rgb), 0.7), 0 0 21px rgba(var(--primary-rgb), 0.7)'
          },
          '20%, 24%, 55%': { 
            textShadow: 'none'
          },
        },
        "radarSpin": {
          from: {
            transform: "rotate(20deg)",
          },
          to: {
            transform: "rotate(380deg)",
          },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 25s linear infinite',
        "float": 'float 6s ease-in-out infinite',
        "pulse-subtle": 'pulse-subtle 4s ease-in-out infinite',
        "scale-fade-in": 'scale-fade-in 0.5s ease-out forwards',
        "fade-in-up": 'fade-in-up 0.6s ease-out forwards',
        "gradient-flow": 'gradient-flow 8s ease infinite',
        "glow-pulse": 'glow-pulse 2s ease-in-out infinite',
        "shimmer": 'shimmer 2.5s infinite linear',
        "tilt": 'tilt 7s ease-in-out infinite',
        "rotate-slow": 'rotate-full 10s linear infinite',
        "rotate-medium": 'rotate-full 7s linear infinite',
        "rotate-fast": 'rotate-full 3s linear infinite',
        "rotate-reverse-slow": 'rotate-reverse 12s linear infinite',
        "typing": 'typing 3.5s steps(40, end)',
        "cursor-blink": 'blink 0.7s infinite',
        "neon-flicker": 'neon-flicker 3s infinite',
        "radarSpin": "radarSpin 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 