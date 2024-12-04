import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlowerLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 2.076.455.233a12.05 12.05 0 0 1 4.402 3.846 12 12 0 0 1 2.962-.957L21 4.98V13a9 9 0 0 1-18 0V4.98l1.18.218c1.041.19 2.035.516 2.963.957a12.05 12.05 0 0 1 4.402-3.846zm-3.122 5.09A12.1 12.1 0 0 1 12 10.363a12.1 12.1 0 0 1 3.122-3.199A10.06 10.06 0 0 0 12 4.337a10.1 10.1 0 0 0-3.122 2.828m2.021 5.268a10.05 10.05 0 0 0-3.908-4.102A10 10 0 0 0 5 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12 12 0 0 1 10 17c0-1.617.32-3.159.9-4.566m1.554 7.552A7 7 0 0 0 19 13V7.457A9.996 9.996 0 0 0 12 17c0 1.042.159 2.045.453 2.987" />
  </Svg>
);
export default SvgFlowerLine;
