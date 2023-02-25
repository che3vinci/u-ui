import { styled } from "@yuejs/react";
import React from "react";

import { Text } from "./Text";

export const Title = styled(Text, {}, { as: "h1" });
export const SubTitle = styled(Text, {}, { as: "h2" });
export const Description = styled(Text, {}, { as: "p" });
