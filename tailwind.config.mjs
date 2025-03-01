// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      // Add custom theme extensions here, for example:
      // colors: {
      //   brand: "#1da1f2",
      // },
    },
  },
  plugins: [
    // Example plugin for clamping text
  ],
}