import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChessLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15.5.287q-1.037.43-2 .987C8.419 4.215 5 9.708 5 16H4v4H3v2h17v-2h-1v-4h-1.192a5.4 5.4 0 0 0-.76-1.85c-.566-.858-1.421-1.562-2.658-2.131q-.196-.09-.396-.172a.174.174 0 0 1-.059-.282c.055-.055.122-.053.192-.04l1.753.351 2.413.483a1 1 0 0 0 1.065-.485l1.295-2.266a1 1 0 0 0-.105-1.142L15.5 2.5zM17 20H6v-2h11zM7 16c0-5.22 2.668-9.822 6.719-12.509l4.85 5.732-.59 1.033-3.497-.7a2.17 2.17 0 0 0-1.96.594c-1.133 1.133-.676 2.977.713 3.547 1.246.513 1.859 1.082 2.2 1.642.118.193.22.41.303.661zm7-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgChessLine;
