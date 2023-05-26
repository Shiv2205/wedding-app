/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beat: {
          '50%, 75%': {
            transform: 'scale(1.8)'
          },
          '75%, 100%': {
            transform: 'scale(1)'
          }
        },
        notif: {
          '50%, 75%': {
            transform: 'scale(1.8)',
            opacity: .5
          },
          '75%, 100%': {
            transform: 'scale(1)',
            opacity: 1
          }
        }
      },
      animation: {
        'heart-beat': 'beat 0.8s cubic-bezier(0, 0, 0.2, 1) infinite', 
        'notification': 'notif 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      fontFamily: {
        'aboreto': ['Aboreto', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}
