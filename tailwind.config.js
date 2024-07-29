/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        backgroundBlack: '#131319',
        backgroundLoginForm: '#27292D',
        buttonPrimary: '#4A96FF',
        textPrimary: '#C5C7CA',
        textPara: '#7F8084',
        backgroundPost: '#27292D',
        borderPost: '#35373B',
        backgroundCreatePost: '#191920',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #969696, #343434)',
      },
    },
  },
  plugins: [],
};
