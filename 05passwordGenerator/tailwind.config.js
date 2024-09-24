/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.line-height': {
          '&-5': {
            lineHeight: '1.25rem'
          },
          '&-6': {
            lineHeight: '1.5rem'
          }
        }
      });
    }
  ]
}

