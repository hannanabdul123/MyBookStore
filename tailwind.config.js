
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    // Ensure it covers all JS/TS files
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': '#000000', // Dark mode background color
        'dark-text': '#ffffff', 
      },
    },
    
  },
  plugins: [require('daisyui')],
  
};