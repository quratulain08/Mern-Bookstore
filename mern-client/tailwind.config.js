/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add Flowbite content paths
    "./node_modules/flowbite/**/*.js", // Add this line to include Flowbite's JS files
    "./node_modules/flowbite-react/**/*.js", // If using Flowbite React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add Flowbite plugin
    require('flowbite/plugin'),
  ],
};
