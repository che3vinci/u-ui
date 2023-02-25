import { Atomic } from "../Atomic";
import { styled } from "@yuejs/react";

export const Link = styled(
  Atomic,
  {
    textDecoration: "none",
    cursor: "pointer",
  },
  { as: "a" }
);
