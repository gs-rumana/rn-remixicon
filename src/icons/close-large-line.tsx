import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloseLargeLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10.586 12 2.793 4.207l1.414-1.414L12 10.586l7.793-7.793 1.414 1.414L13.414 12l7.793 7.793-1.414 1.414L12 13.414l-7.793 7.793-1.414-1.414z" />
  </Svg>
);
export default SvgCloseLargeLine;
