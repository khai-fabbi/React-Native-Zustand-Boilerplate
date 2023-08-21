import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function LogoIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      {...props}
    >
      <Path
        // eslint-disable-next-line max-len
        d="M2.682 7.873C1.653 6.07 2.222 3.79 3.952 2.78c1.729-1.01 3.965-.368 4.993 1.434l4.516 7.913c1.028 1.803.46 4.083-1.27 5.094-1.729 1.01-3.965.368-4.994-1.435L2.682 7.873z"
        fill="url(#paint0_linear_2384_555)"
      />
      <Path
        // eslint-disable-next-line max-len
        d="M21.181 5.917c0 2.024-1.615 3.666-3.608 3.666s-3.61-1.642-3.61-3.666 1.617-3.666 3.61-3.666c1.993 0 3.608 1.642 3.608 3.666z"
        fill="url(#paint1_linear_2384_555)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2384_555"
          x1={3.95107}
          y1={2.77976}
          x2={12.1088}
          y2={16.9247}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1DC071" />
          <Stop offset={1} stopColor="#77D9AA" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2384_555"
          x1={17.5727}
          y1={2.25146}
          x2={17.555}
          y2={9.45134}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1DC071" />
          <Stop offset={1} stopColor="#77D9AA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default LogoIcon;
