/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./App/.{js,jsx,ts,tsx}",
//     "./navigation/**/*.{js,jsx,ts,tsx}",
//     "./screens/**/*.{js,jsx,ts,tsx}",
//   ],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./**/*.{js,jsx,ts,tsx}",
    "!./node_modules/**/*",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}