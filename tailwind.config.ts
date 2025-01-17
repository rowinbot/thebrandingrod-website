import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const appPlugin: PluginCreator = ({ addUtilities }) => {
  addUtilities({
    ".pretty-text-shadow": {
      "text-shadow":
        `0px 0px 2px rgba(0,0,0, 0.3), 0px 2px 7px rgba(66, 68, 90, 0.3)`.trim(),
    },
  });
};

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["'Times'", "serif"],
      },
    },
  },
  plugins: [appPlugin],
} satisfies Config;
