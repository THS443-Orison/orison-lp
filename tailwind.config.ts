import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        DEFAULT: "2px 2px 4px rgba(255, 255, 255, 0.93)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        rainbow:
          "0 0 2px red, 0 0 4px orange, 0 0 6px yellow, 0 0 8px green, 0 0 10px blue, 0 0 12px indigo, 0 0 14px violet",
      },
      keyframes: {
        randomMove: {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(30px, 50px)' },
          '20%': { transform: 'translate(-20px, -40px)' },
          '30%': { transform: 'translate(50px, -10px)' },
          '40%': { transform: 'translate(-40px, 30px)' },
          '50%': { transform: 'translate(20px, -30px)' },
          '60%': { transform: 'translate(-50px, 40px)' },
          '70%': { transform: 'translate(40px, -50px)' },
          '80%': { transform: 'translate(-30px, 20px)' },
          '90%': { transform: 'translate(10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rainbow: {
          "0%": { color: "#ff1b3f" },
          "16.6%": { color: "#ff553f" },
          "33.3%": { color: "#ffd700" },
          "50%": { color: "#7ef41d" },
          "66.6%": { color: "#0da5d9" },
          "83.3%": { color: "#ff70c9" },
          "100%": { color: "#9e00e9" },
        },
      },
      animation: {
        float: "float 0.8s ease-in-out infinite",
        rainbow: "rainbow 4s infinite",
        randomMove: "randomMove 10s infinite ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: any) => void }) {
      addUtilities({
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" },
        ".text-shadow": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" },
        ".text-shadow-lg": { textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-rainbow": {
          textShadow:
            "0 0 2px red, 0 0 4px orange, 0 0 6px yellow, 0 0 8px green, 0 0 10px blue, 0 0 12px indigo, 0 0 14px violet",
        },
      });
    },
  ],
} satisfies Config;
