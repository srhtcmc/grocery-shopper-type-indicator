/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        navy: '#000C52',
        cream: '#FBF5E6',
        cyan: '#43C4F4',
        purple: '#760FCA',
        pink: '#FF658F',
        yellow: '#FFD500',
        grey: '#D9D9D9',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
