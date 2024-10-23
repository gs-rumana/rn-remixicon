import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicAiFill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16.734 4.387A5.002 5.002 0 0 0 7 6v4a5 5 0 0 0 10 0V6q0-.078-.003-.154l.07.031a4.36 4.36 0 0 1 2.22 2.251l.246.566c.18.414.753.414.934 0l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327zM5.07 11H3.055A9.004 9.004 0 0 0 11 18.945V23h2v-4.055A9.004 9.004 0 0 0 20.945 11h-2.016A7.002 7.002 0 0 1 5.07 11" />
  </Svg>
);
export default SvgMicAiFill;
