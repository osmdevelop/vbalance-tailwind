/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lora, system-ui, sans-serif',
        'pauline-didone': ['"pauline-didone-variable"', 'sans-serif']
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
