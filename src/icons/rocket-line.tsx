import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRocketLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 13c0-5.088 2.902-9.436 7-11.182C16.097 3.564 19 7.912 19 13q-.002 1.236-.221 2.403l1.94 1.832a.5.5 0 0 1 .096.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.235-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.235 2.234a.5.5 0 0 1-.792-.114l-2.496-4.575a.5.5 0 0 1 .096-.603l1.94-1.832Q5.002 14.236 5 13m1.475 6.696.817-.817a3 3 0 0 1 2.122-.88h5.171a3 3 0 0 1 2.122.88l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82A11 11 0 0 0 17 13c0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13q0 1.038.186 2.036a2 2 0 0 1-.593 1.82l-1.1 1.04zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgRocketLine;