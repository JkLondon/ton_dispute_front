/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      // Primary Telegram Blue Colors
      'telegram-blue': '#0088cc', // Main Brand Blue
      'telegram-light-blue': '#34b7f1', // Lighter Blue for accents
      'telegram-bt-blue': '#007AFF',
      // Supporting Blues
      'telegram-dark-blue': '#006087', // Darker shade of Telegram blue
      'telegram-darker-blue': '#004d66', // Even darker shade for contrasts

      // Neutrals for Backgrounds and Text
      'telegram-gray': '#f7f7f7', // Very light gray for background
      'telegram-light-gray': '#d8d8d8', // Light gray for secondary elements
      'telegram-dark-gray': '#a0a0a0', // Medium gray for text

      // Alternative Colors
      'telegram-black': '#2c2c2c', // Dark for text and important elements
      'telegram-white': '#ffffff', // Pure white for backgrounds and themes
      // System Colors (Green and Red)
      'telegram-green': '#34C759', // Bright green for success messages
      'telegram-red': '#FF3B30', // Bright red for errors and warnings

    },
    extend: {},
  },
  plugins: [],
}

