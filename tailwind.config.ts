import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      colors: {
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        blob: "blob 7s infinite",
        scan: "scan 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "rgb(var(--foreground-rgb))",
            '[class~="lead"]': {
              color: "rgb(var(--foreground-rgb))",
            },
            a: {
              color: "#9333ea",
              "&:hover": {
                color: "#7e22ce",
              },
            },
            strong: {
              color: "rgb(var(--foreground-rgb))",
            },
            "ol > li::marker": {
              color: "rgb(var(--foreground-rgb))",
            },
            "ul > li::marker": {
              color: "rgb(var(--foreground-rgb))",
            },
            hr: {
              borderColor: "rgb(var(--foreground-rgb))",
            },
            blockquote: {
              borderLeftColor: "#9333ea",
              color: "rgb(var(--foreground-rgb))",
            },
            h1: {
              color: "rgb(var(--foreground-rgb))",
            },
            h2: {
              color: "rgb(var(--foreground-rgb))",
            },
            h3: {
              color: "rgb(var(--foreground-rgb))",
            },
            h4: {
              color: "rgb(var(--foreground-rgb))",
            },
            "figure figcaption": {
              color: "rgb(var(--foreground-rgb))",
            },
            code: {
              color: "rgb(var(--foreground-rgb))",
            },
            "a code": {
              color: "#9333ea",
            },
            pre: {
              color: "rgb(var(--foreground-rgb))",
              backgroundColor: "rgb(var(--background-rgb))",
            },
            thead: {
              color: "rgb(var(--foreground-rgb))",
              borderBottomColor: "rgb(var(--foreground-rgb))",
            },
            "tbody tr": {
              borderBottomColor: "rgb(var(--foreground-rgb))",
            },
          },
        },
      },
      utilities: {
        ".animation-delay-2000": {
          "animation-delay": "2s",
        },
        ".animation-delay-4000": {
          "animation-delay": "4s",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
