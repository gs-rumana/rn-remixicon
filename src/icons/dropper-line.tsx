import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropperLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M19.778 4.222a2 2 0 0 1 0 2.828L16.95 9.88 14.12 7.05l2.829-2.828a2 2 0 0 1 2.828 0m1.414-1.415a4 4 0 0 0-5.656 0l-2.829 2.829-.354-.353a1 1 0 1 0-1.414 1.414l.354.353-6.215 6.215a4 4 0 0 0-1.094 2.044l-.35 1.754a2 2 0 0 1-.547 1.022l-.986.986a1 1 0 0 0 0 1.414L3.515 21.9a1 1 0 0 0 1.414 0l.986-.986a2 2 0 0 1 1.022-.547l1.754-.351a4 4 0 0 0 2.044-1.094l6.215-6.215.353.354a1 1 0 0 0 1.415-1.414l-.354-.354 2.828-2.829a4 4 0 0 0 0-5.657m-8.485 5.658 2.829 2.828-6.215 6.215a2 2 0 0 1-1.022.547l-1.754.35A4 4 0 0 0 4.5 19.5a4 4 0 0 0 1.094-2.044l.35-1.755a2 2 0 0 1 .547-1.022z" />
  </Svg>
);
export default SvgDropperLine;