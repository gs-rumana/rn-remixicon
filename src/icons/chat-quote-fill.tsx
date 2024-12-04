import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatQuoteFill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zM10.515 7.412C8.728 8.187 7.5 9.755 7.5 11.505c0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2 2 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573zm5 0c-1.787.775-3.015 2.343-3.015 4.093 0 .995.277 1.609.792 2.156.324.344.837.589 1.374.589a1.75 1.75 0 0 0 1.75-1.75 1.76 1.76 0 0 0-1.614-1.745 2 2 0 0 0-.479.01v-.092c.006-.44.1-1.74 1.639-2.573z" />
  </Svg>
);
export default SvgChatQuoteFill;