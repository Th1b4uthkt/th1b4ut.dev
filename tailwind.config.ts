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
          "60": "hsla(var(--secondary) / 0.6)",
          "70": "hsla(var(--secondary) / 0.7)",
          "80": "hsla(var(--secondary) / 0.8)",
          "90": "hsla(var(--secondary) / 0.9)",
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
          "40": "hsla(var(--accent) / 0.4)",
          "50": "hsla(var(--accent) / 0.5)",
          "60": "hsla(var(--accent) / 0.6)",
          "70": "hsla(var(--accent) / 0.7)",
          "80": "hsla(var(--accent) / 0.8)",
          "90": "hsla(var(--accent) / 0.9)",
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
        'matrix': '0 0 5px theme(colors.secondary.30), 0 0 20px theme(colors.secondary.20)',
        'cyber': '0 0 2px theme(colors.primary.50), 0 0 10px theme(colors.primary.30), inset 0 0 5px theme(colors.primary.20)',
        'cyber-card': '0 10px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(var(--primary-rgb), 0.2)',
        'cyber-button': '0 5px 15px rgba(0, 0, 0, 0.2), 0 0 5px rgba(var(--primary-rgb), 0.3)',
        'underground': '0 4px 15px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.3)',
        'vinyl': '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.5)',
        'industrial': '0 2px 10px rgba(0, 0, 0, 0.3), inset 0 0 5px rgba(var(--primary-rgb), 0.1)',
        'studio': '0 5px 15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(var(--primary-rgb), 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-angular': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-small-black': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000000\' opacity=\'0.2\'%3E%3Cpath d=\'M0 0h24v24H0z\' stroke-width=\'0.4\'/%3E%3C/svg%3E")',
        'grid-small-white': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23FFFFFF\' opacity=\'0.2\'%3E%3Cpath d=\'M0 0h24v24H0z\' stroke-width=\'0.4\'/%3E%3C/svg%3E")',
        'cyber-grid': 'linear-gradient(to right, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.1) 1px, transparent 1px)',
        'matrix-rain': 'linear-gradient(180deg, rgba(var(--secondary-rgb), 0.05) 0%, rgba(var(--secondary-rgb), 0.02) 50%, transparent 100%)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--secondary-rgb), 0.2) 50%, rgba(var(--accent-rgb), 0.2) 100%)',
        'scanline': 'repeating-linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 0.5%, transparent 1%)',
        'scanline-dark': 'repeating-linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.05) 0.5%, transparent 1%)',
        'vinyl-texture': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        'vhs-lines': 'repeating-linear-gradient(to bottom, transparent 0px, rgba(0, 0, 0, 0.05) 1px, transparent 2px, transparent 4px)',
        'vhs-lines-dark': 'repeating-linear-gradient(to bottom, transparent 0px, rgba(255, 255, 255, 0.05) 1px, transparent 2px, transparent 4px)',
        'waveform': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'waveform\' patternUnits=\'userSpaceOnUse\' width=\'100\' height=\'20\' patternTransform=\'scale(1) rotate(0)\'%3E%3Cpath d=\'M0 10 Q 12.5 5, 25 10 T 50 10 T 75 10 T 100 10\' fill=\'none\' stroke=\'%23ff0000\' stroke-width=\'0.5\' stroke-opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23waveform)\'/%3E%3C/svg%3E")',
        'studio-grid': 'linear-gradient(to right, rgba(var(--primary-rgb), 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.03) 1px, transparent 1px)',
        'studio-grid-dark': 'linear-gradient(to right, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)',
        'underground-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(var(--primary-rgb), 0.1) 100%)',
        'underground-gradient-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(var(--primary-rgb), 0.15) 100%)',
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
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        "glitch-horizontal": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" }
        },
        "glitch-vertical": {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-1px)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(1px)" }
        },
        "cyber-scan": {
          "0%": { 
            backgroundPosition: "0% 0%",
            opacity: "0.1"
          },
          "50%": { 
            opacity: "0.3" 
          },
          "100%": { 
            backgroundPosition: "0% 100%",
            opacity: "0.1"
          }
        },
        "border-flow": {
          "0%": { 
            borderColor: "rgba(var(--primary-rgb), 0.3)",
            boxShadow: "0 0 5px rgba(var(--primary-rgb), 0.3)"
          },
          "50%": { 
            borderColor: "rgba(var(--primary-rgb), 0.6)",
            boxShadow: "0 0 10px rgba(var(--primary-rgb), 0.5)"
          },
          "100%": { 
            borderColor: "rgba(var(--primary-rgb), 0.3)",
            boxShadow: "0 0 5px rgba(var(--primary-rgb), 0.3)"
          }
        },
        "industrial-glitch-1": {
          "0%, 95%, 100%": {
            transform: "none",
            opacity: "0.8"
          },
          "96%, 99%": {
            transform: "translateX(-2px)",
            opacity: "0.9"
          },
          "97%, 98%": {
            transform: "translateX(2px)",
            opacity: "0.7"
          }
        },
        "industrial-glitch-2": {
          "0%, 96%, 100%": {
            transform: "none",
            opacity: "0.8"
          },
          "97%, 99%": {
            transform: "translateX(-2px)",
            opacity: "0.9"
          },
          "98%": {
            transform: "translateX(2px)",
            opacity: "0.7"
          }
        },
        "vinyl-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "progress-shine": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "static-noise": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.1" }
        },
        "vu-meter-bounce": {
          "0%, 100%": { width: "30%" },
          "10%": { width: "50%" },
          "20%": { width: "70%" },
          "30%": { width: "90%" },
          "40%": { width: "60%" },
          "50%": { width: "80%" },
          "60%": { width: "40%" },
          "70%": { width: "65%" },
          "80%": { width: "45%" },
          "90%": { width: "75%" }
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
        "matrix-rain": "matrix-rain 2s linear infinite",
        "glitch": "glitch-horizontal 0.2s ease infinite, glitch-vertical 0.3s ease infinite",
        "cyber-scan": "cyber-scan 3s ease-in-out infinite",
        "border-flow": "border-flow 2s ease-in-out infinite",
        "industrial-glitch": "industrial-glitch-1 3s infinite linear alternate-reverse, industrial-glitch-2 2.7s infinite linear alternate-reverse",
        "vinyl-rotate": "vinyl-rotate 20s linear infinite",
        "progress-shine": "progress-shine 2s infinite linear",
        "static-noise": "static-noise 0.5s infinite",
        "vu-meter": "vu-meter-bounce 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 