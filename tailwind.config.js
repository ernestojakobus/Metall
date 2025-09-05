module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/*.html",
    "./assets/**/*.js",
    "./static/**/*.html",
  ],
  safelist: [
    "whatsapp-float",
    "hidden",
    "opacity-0",
    // falls du weitere Backgrounds mal brauchst, kannst du sie hier safelisten
    "bg-[url('/img/hintergrund/bg-beton.png')]"
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      },
      // HIER: Eigene Background-Image-Utility
      backgroundImage: {
        'beton': "url('/img/hintergrund/bg-beton.png')",
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography")
  ],
};
