import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}
function EyeIcon(props: IProps) {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M3 12s3.273-7 9-7 9 7 9 7-3.273 7-9 7-9-7-9-7z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14a2 2 0 100-4 2 2 0 000 4z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeIcon;
