import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGhostLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-6.996 6.76L5 11v7.446l.002.138a1.5 1.5 0 0 0 2.645.88l.088-.116a2 2 0 0 1 3.393.142.999.999 0 0 0 1.74.003 2 2 0 0 1 3.296-.278l.097.13a1.5 1.5 0 0 0 2.732-.701L19 18.5V11a7 7 0 0 0-7-7m0 8c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5-2-1.12-2-2.5.895-2.5 2-2.5M9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </Svg>
);
export default SvgGhostLine;
