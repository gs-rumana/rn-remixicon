import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInfinityFill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 12a3.5 3.5 0 0 0 3.5 3.5c1.204 0 2.02-.434 2.7-1.113.621-.623 1.121-1.44 1.655-2.387-.534-.947-1.034-1.764-1.656-2.387C8.52 8.933 7.704 8.5 6.5 8.5A3.5 3.5 0 0 0 3 12m3.5 5.5a5.5 5.5 0 1 1 0-11c1.797 0 3.105.691 4.113 1.7.536.534.987 1.162 1.387 1.802.4-.64.851-1.268 1.387-1.803C14.395 7.191 15.703 6.5 17.5 6.5a5.5 5.5 0 1 1 0 11c-1.796 0-3.105-.691-4.113-1.7-.536-.534-.987-1.162-1.387-1.802-.4.64-.851 1.268-1.387 1.803C9.605 16.809 8.297 17.5 6.5 17.5m6.645-5.5c.534.947 1.034 1.764 1.656 2.387.68.68 1.496 1.113 2.699 1.113a3.5 3.5 0 1 0 0-7c-1.203 0-2.02.434-2.7 1.113-.621.623-1.121 1.44-1.655 2.387" />
  </Svg>
);
export default SvgInfinityFill;
