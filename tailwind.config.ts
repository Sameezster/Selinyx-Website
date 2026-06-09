import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand purple
        brand: {
          50: "#f4f2ff",
          100: "#ece7ff",
          200: "#dad2ff",
          300: "#bfaeff",
          400: "#9f81ff",
          500: "#7c4dff",
          600: "#6a32f5",
          700: "#5a22db",
          800: "#4a1eb0",
          900: "#3e1d8c",
          950: "#26114f",
        },
        // Secondary accent blue
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        ink: {
          50: "#f6f7fb",
          100: "#eceef6",
          200: "#d5d9e8",
          300: "#b0b8d1",
          400: "#8590b5",
          500: "#66719c",
          600: "#515a82",
          700: "#434a6a",
          800: "#3a405a",
          900: "#0e1020",
          950: "#080a16",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(80, 50, 200, 0.18)",
        "soft-lg": "0 24px 70px -20px rgba(80, 50, 200, 0.28)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7c4dff 0%, #6a32f5 45%, #3b82f6 100%)",
        "brand-radial":
          "radial-gradient(120% 120% at 50% 0%, rgba(124,77,255,0.18) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%, 100%": { transform: "scale(1.8)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
