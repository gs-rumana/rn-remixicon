import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGroup2Line = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9.55 11.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m.45 8.248V16.4c0-.488.144-.937.404-1.338a6.474 6.474 0 0 0-5.033 1.417A8 8 0 0 0 10 19.749M4.453 14.66A8.46 8.46 0 0 1 9.5 13a8.5 8.5 0 0 1 2.967.532C13.345 13.19 14.392 13 15.5 13c1.66 0 3.185.424 4.206 1.156a8 8 0 1 0-15.253.504m14.426 1.426C18.486 15.553 17.171 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a8 8 0 0 0 6.88-3.914M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.5-9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgGroup2Line;
