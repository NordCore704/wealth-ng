/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        scheme: {
          'white': '#ffffff',
          'black': '#131313',
          'orange': '#ed5247',
          'grey': '#f7f6f6',
          'blue': '#073a79',
          'yellow': '#feca0f',
        },
      }
    },
  },
  plugins: [],
}
