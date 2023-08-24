import React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowRightIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path d="M10.5 17l5-5-5-5" stroke="#A2A2A8" strokeWidth={1.5} />
    </Svg>
  );
}

export default ArrowRightIcon;
