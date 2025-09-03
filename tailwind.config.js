/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'univille-green': '#1B5E20',
        'univille-dark': '#0D1117',
        'univille-gray': '#161B22',
      },
    },
  },
  plugins: [],
}