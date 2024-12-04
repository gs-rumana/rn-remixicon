import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClaudeLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8.644 2.553a1 1 0 1 0-1.788.894L9.68 9.1 5.067 5.926a1 1 0 0 0-1.134 1.648l5.472 3.762L3.053 11A1 1 0 1 0 2.947 13l5.795.305-4.297 2.864a1 1 0 1 0 1.11 1.664l3.642-2.428-2.51 3.515a1 1 0 1 0 1.627 1.162l3.033-4.246-.833 5a1 1 0 0 0 1.972.33l.802-4.812 2.37 3.688a1 1 0 0 0 1.683-1.082l-1.786-2.778 2.767 2.554a1 1 0 0 0 1.356-1.47l-3.035-2.802 4.233.53a1 1 0 0 0 .248-1.985l-4.19-.524 4.295-1.01a1 1 0 1 0-.458-1.947l-5.59 1.315 4.105-5.224a1 1 0 1 0-1.572-1.236L13.857 9.29l.881-5.636a1 1 0 1 0-1.976-.308l-.886 5.67z" />
  </Svg>
);
export default SvgClaudeLine;