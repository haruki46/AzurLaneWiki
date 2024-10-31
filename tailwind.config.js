import {nextui} from '@nextui-org/theme'
import { color } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    
      extend: {
        fontFamily: {
          sans: ["var(--font-sans)"],
          mono: ["var(--font-mono)"],
      },
    },
  },

  darkMode: "class",
  darkMode: "class",
 plugins: [nextui()],
}