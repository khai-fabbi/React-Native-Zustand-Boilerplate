import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CloseIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2430_2025)">
        <Path
          // eslint-disable-next-line max-len
          d="M15 4.209L13.792 3 9 7.792 4.21 3 3 4.21 7.792 9 3 13.791l1.209 1.21L9 10.208 13.792 15 15 13.791l-4.791-4.79L15 4.208z"
          fill="#EB5757"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2430_2025">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloseIcon;
