module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "750px" },
        lg: { min: "750px", max: "1535px" },
      },
    },
  },
  plugins: [],
};
