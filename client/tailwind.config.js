// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',  // Ensure app folder is included
//     './pages/**/*.{js,ts,jsx,tsx}', // Ensure pages folder is included
//     './components/**/*.{js,ts,jsx,tsx}', // Ensure components folder is included
//     './layout/**/*.{js,ts,jsx,tsx}', // Ensure layout folder is included
//   ],
//   theme: {
//     extend: {
//       screens: {
//         sm: '640px',  // Small screens and above
//         md: '768px',  // Medium screens and above
//         lg: '1024px', // Large screens and above
//         xl: '1280px', // Extra large screens and above
//         '2xl': '1536px', // 2x Extra large screens and above
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure app folder is included
    "./pages/**/*.{js,ts,jsx,tsx}", // Ensure pages folder is included
    "./components/**/*.{js,ts,jsx,tsx}", // Ensure components folder is included
    "./layout/**/*.{js,ts,jsx,tsx}", // Ensure layout folder is included
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens and above
        md: "768px", // Medium screens and above
        lg: "1024px", // Large screens and above
        xl: "1280px", // Extra large screens and above
        "2xl": "1536px", // 2x Extra large screens and above
      },
      fontFamily: {
        sans: ["cali", "sans-serif"],
        calibri: ['Calibri', 'sans-serif'],
        mono: ['"Geist Mono"', "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out", // Add custom fadeIn animation
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        zoomIn: "zoomIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
