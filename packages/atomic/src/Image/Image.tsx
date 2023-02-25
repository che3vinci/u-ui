import { URL } from "@c3/types";
import { styled } from "@yuejs/react";
import React, { useCallback } from "react";
import { Atomic } from "../Atomic";

// export type ImageProps = CSSProps & {
//   fallbackSrc?: URL;
//   loadingIndicator?: URL;
// } & React.ImgHTMLAttributes<HTMLImageElement>;

const _Image = styled(
  Atomic,
  {
    objectFit: "cover",
    objectPosition: "center",
    flexShrink: 0,
    maxWidth: "100%",
  },
  { as: "img" }
);
export const Image = _Image;
// export const Image: React.FC<ImageProps> = props => {
//   const [isError, errorOn] = useSwitch(false);
//   const [isLoading, loadingOff] = useSwitch(true);
//   const {
//     fallbackSrc = '',
//     src,
//     onLoad,
//     onError,
//     ...restProps
//   } = props;

//   const handleLoad = useCallback(
//     (e: any) => {
//       errorOn();
//       loadingOff();
//       onLoad && onLoad(e);
//     },
//     [errorOn, loadingOff, onLoad]
//   );
//   const handleError = useCallback(
//     (e: any) => {
//       loadingOff();
//       onError && onError(e);
//     },
//     [loadingOff, onError]
//   );

//   return (
//     <_Image
//       as="img"
//       // onError={handleError}
//       // onLoad={handleLoad}
//       src={isError ? fallbackSrc : src}
//       {...restProps}
//     />
//   );
// };
