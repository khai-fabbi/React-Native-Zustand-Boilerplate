import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function FolderIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2414_3336)">
        <Path
          // eslint-disable-next-line max-len
          d="M9.67 6l2 2h8.83v10h-16V6h5.17zm.83-2h-6c-1.1 0-1.99.9-1.99 2L2.5 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
          fill="#808191"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2414_3336">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default FolderIcon;
