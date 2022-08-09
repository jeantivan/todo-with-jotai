import { styled } from "@stitches/react";
import { blue, blueA, red, redA, amber, amberA } from "@radix-ui/colors";

const Button = styled("button", {
  outline: "none",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "white",
  fontSize: 16,
  border: 0,
  padding: "8px 20px",
  cursor: "pointer",
  transition: "background 100ms ease",

  variants: {
    rounded: {
      full: {
        borderRadius: 9999,
      },
      base: {
        borderRadius: 8,
      },
    },
    action: {
      base: {
        background: `linear-gradient(45deg, ${blue.blue8}, ${blueA.blueA9})`,
        "&:active": {
          background: `linear-gradient(45deg, ${blue.blue10}, ${blueA.blueA9})`,
        },
      },
      danger: {
        background: `linear-gradient(45deg, ${red.red8}, ${redA.redA9})`,
        "&:active": {
          background: `linear-gradient(45deg, ${red.red10}, ${redA.redA9})`,
        },
      },
      urgent: {
        background: `linear-gradient(45deg, ${amber.amber8}, ${amberA.amberA9})`,
        "&:active": {
          background: `linear-gradient(45deg, ${amber.amber10}, ${amberA.amberA9})`,
        },
      },
    },
  },
  defaultVariants: {
    rounded: "base",
    action: "base",
  },
});

export default Button;
