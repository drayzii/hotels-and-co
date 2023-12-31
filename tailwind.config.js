/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'blue': '#4083a1',
      'blue-light': '#9dc5d5',
      'pink': '#FF385C',
      'pink-sec': '#de2f4e',
      'black': '#362722',
      'gray': '#333333',
      'gray-light': '#d3dce6',
      'gray-lighter': '#dddddd',
      'green': '#00a699',
      'black': '#000000',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    },
  },
  plugins: [],
}
