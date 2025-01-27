import type { Config } from "tailwindcss"
import { heroui } from "@heroui/react"

export default {
  darkMode: "class",
  plugins: [heroui()],
  content: [
    "./src/presenters/**/*.tsx",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
} satisfies Config
