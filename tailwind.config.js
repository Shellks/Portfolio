/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts, js}",
  ],
  theme: {
    extend: {
      colors: {
        'kingpong1': '#630050',
        'kingpong2': '#16395E',
        'kingpong3': '#001E27',
        'custom-cyan': '#A8FFFD',
      },
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

