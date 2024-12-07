/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      common: {
        white: "#fff",
        black: "#000",
      },
      lightGreen: "#00AD93",
      primaryText: "#002D38",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(0deg, #5A67D8 0%, #04C8BB 100%)",
        "lightBlue-gradient":
          "linear-gradient(323deg, #5a67d8 -179.75%, transparent 78.5%)",
        "lightGreen-gradient":
          "linear-gradient(330deg, #00a1a5 -186.48%, transparent 79.84%)",
        "gradient-transparent-to-dark":
          "linear-gradient(180deg, rgba(26, 32, 44, 0), #1a202c)",
        "gradient-dark-to-transparent":
          "linear-gradient(0deg, rgba(26, 32, 44, 0), #1a202c)",
        "darkBlue-dark-to-transparent":
          "linear-gradient(90deg, #090A15 0%, transparent 15%)",
        "darkBlue-transparent-to-dark":
          "linear-gradient(272deg, #090A15 0%, transparent 15%)",
        "black-dark-to-transparent":
          "linear-gradient(180deg, #0b0c17, rgba(11, 12, 23, 0))",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: true },
  important: true,
};
