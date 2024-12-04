import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoreosLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9.454 4.414a8 8 0 1 0 10.202 9.91q-5.1 2.189-11.545 1.565Q7.044 9.702 9.454 4.414M11.902 4a16.8 16.8 0 0 0-1.541 3.768 5.98 5.98 0 0 1 4.114 1.756 5.98 5.98 0 0 1 1.745 3.861q1.994-.513 3.78-1.433A7.994 7.994 0 0 0 11.902 4M4.93 19.07c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0 3.905 10.237 0 14.142-10.237 3.905-14.142 0m5.02-9.293a18 18 0 0 0-.076 4.229 23 23 0 0 0 4.36-.219 3.99 3.99 0 0 0-1.172-2.849 4 4 0 0 0-3.112-1.161" />
  </Svg>
);
export default SvgCoreosLine;
