import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgParkingLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 3h7a6 6 0 0 1 0 12H8v6H6zm2 2v8h5a4 4 0 0 0 0-8z" />
  </Svg>
);
export default SvgParkingLine;
