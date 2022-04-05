module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          xs: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          // '2xl': '12rem',
        },
      },
      borderRadius: {
        xl: '30px',
        xxl: '50px',
      },
    },
  },
  plugins: [],
}
