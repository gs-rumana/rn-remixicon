import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCakeLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm6 6H5v7h14zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z" />
  </Svg>
);
export default SvgCakeLine;
