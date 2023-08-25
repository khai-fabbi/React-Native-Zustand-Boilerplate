import * as React from "react";
import Svg, { Path } from "react-native-svg";

function EditIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        // eslint-disable-next-line max-len
        d="M9.945 2.7L3.787 9.218c-.232.247-.457.735-.502 1.072l-.278 2.43c-.097.878.533 1.478 1.403 1.328l2.415-.413c.337-.06.81-.307 1.042-.562l6.158-6.518c1.065-1.125 1.545-2.407-.113-3.975-1.65-1.552-2.902-1.005-3.967.12z"
        stroke="#8C6DFD"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.918 3.787a4.595 4.595 0 004.087 3.863M2.25 16.5h13.5"
        stroke="#8C6DFD"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EditIcon;
