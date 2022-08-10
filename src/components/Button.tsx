import { styled } from "@stitches/react";
import {
  blue,
  blueA,
  red,
  redA,
  amber,
  amberA,
  grass,
  grassA,
} from "@radix-ui/colors";

const Button = styled("button", {
  outline: "none",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "white",
  fontSize: 16,
  border: 0,
  transition: "background 100ms ease",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  "& svg": {
    width: 20,
    height: 20,
  },

  variants: {
    fab: {
      true: {
        width: 48,
        height: 48,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      },
      false: {
        padding: "8px 20px",
      },
    },
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
      check: {
        background: `linear-gradient(45deg, ${grass.grass8}, ${grassA.grassA9})`,
        "&:active": {
          background: `linear-gradient(45deg, ${grass.grass10}, ${grassA.grassA9})`,
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
    fab: false,
  },
});

export default Button;
