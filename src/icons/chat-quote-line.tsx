import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatQuoteLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-9.485 2.412.447.688c-1.668.903-1.639 2.352-1.639 2.665.155-.022.318-.025.48-.01a1.76 1.76 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093m5 0 .447.688c-1.668.903-1.639 2.352-1.639 2.665.155-.022.318-.025.48-.01a1.76 1.76 0 0 1 1.613 1.745 1.75 1.75 0 0 1-1.75 1.75c-.537 0-1.05-.245-1.374-.59-.515-.546-.792-1.16-.792-2.155 0-1.75 1.228-3.318 3.015-4.093" />
  </Svg>
);
export default SvgChatQuoteLine;