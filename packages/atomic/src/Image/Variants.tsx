import { Image } from "./Image";
import React from "react";
import { styled } from "@yuejs/react";

export const Icon = Image;
export const Avatar = styled(Image, {
  round: true,
});
