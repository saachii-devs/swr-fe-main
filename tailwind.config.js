module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardboard: "url('/cardboard.png')",
        waves: "url('/waves.svg')",
        redstripes: "url('/stripe.svg')",
        introstripes: "url('/bg-stripes.svg')",
      },
      fontFamily: {
        abril: ['"Abril Fatface"', 'sans'],
        ibm: ['"IBM Plex Serif"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
        young: ['"Young Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
