/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      // ## Colors
      colors: {
        // ### Primary
        clOrange: "hsl(26, 100%, 55%)",
        clPaleorange: "hsl(25, 100%, 94%)",
        // ### Neutral
        clVerydarkblue: "hsl(220, 13%, 13%)",
        clDarkgrayishblue: "hsl(219, 9%, 45%)",
        clGrayishblue: "hsl(220, 14%, 75%)",
        clLightgrayishblue: "hsl(223, 64%, 98%)",
        clWhite: "hsl(0, 0%, 100%)",
        clBlack: "hsl(0, 0%, 0%)", //with 75% opacity for lightbox background
      },
    },
  },
  plugins: [],
}
