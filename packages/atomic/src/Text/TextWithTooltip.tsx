// import { useIsOverflow, useToggle } from "@c3/react";
// import { Tooltip } from "@u-ui/ct-floating-ui";
// import React, { useEffect } from "react";
// import { Text, type TextProps } from "./Text";

// export type TextWithTooltipProps = TextProps;

// export const TextWithTooltip: React.FC<TextWithTooltipProps> = props => {
//   const { tooltip } = props;
//   const [visible, toggle] = useToggle(false);
//   const [isOverflow, watch] = useIsOverflow();
//   useEffect(() => {
//     // watch();
//   }, [watch]);

//   return isOverflow ? (
//     <Tooltip
//       overlay={<Text>{props.children}</Text>}
//       trigger="hover"
//       visible={visible}
//       onToggle={toggle}
//     >
//       <Text {...props}></Text>
//     </Tooltip>
//   ) : (
//     <Text {...props} />
//   );
// };
export {};
