module.exports= {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      colors:{
        primary: {
          200: '#02889B',
          100: '#06C2AE'
        },
        secondary: '#FF693A'
      }
    },
  },
  variants: {
    
  },
  plugins: [],
}
