import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  ":root": {
    fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-text-size-adjust": "100%",
    color: "#242424",
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 400,
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
});

export default globalStyles;
