import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}
function CalendarIcon(props: IProps) {
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
        // eslint-disable-next-line max-len
        d="M8 2v3-3zm8 0v3-3zM3.5 9.09h17-17zM21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.294 16.7h.01m7.39-3h.01-.01zm0 3h.01-.01zm-3.699-3h.01-.01zm0 3h.01-.01zm-3.7-3h.008-.009z"
        stroke="#A2A2A8"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CalendarIcon;
