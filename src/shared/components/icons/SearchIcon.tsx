import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SearchIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_2408_6595)">
        <Path
          d="M14.667 14.667l-3.334-3.334M13 7.167a5.834 5.834 0 11-11.669 0 5.834 5.834 0 0111.669 0z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2408_6595">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SearchIcon;
