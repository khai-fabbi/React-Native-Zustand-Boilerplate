import React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path d="M15.5 7l-5 5 5 5" stroke="#A2A2A8" strokeWidth={1.5} />
    </Svg>
  );
}

export default ArrowLeftIcon;
