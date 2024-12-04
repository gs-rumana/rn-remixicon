import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgYuqueLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11.505 3.043a.92.92 0 0 1 .795-.46c1.547 0 3.09.05 4.637.154 2.51.171 3.7 1.59 4.18 2.43.596.092 1.388.088 1.571.807.14.552-.217.833-.554 1.148-.483.45-1.133 1.176-.954 1.888.055.222.159.437.316.765l.002.003c.318.667.684 1.51.742 3.115.156 4.34-3.596 6.897-7.252 7.08-2.41 1.815-6.345 3.025-12.557 1.957a1.33 1.33 0 0 1-.945-.709 1.25 1.25 0 0 1-.12-.735c.039-.275.165-.511.33-.7 3.228-3.675 6.635-7.246 9.654-11.098.526-.67.96-1.28 1.15-1.648.309-.919-.009-1.444-.625-2.463-.282-.467-.69-.978-.37-1.534m1.989 5.843c.874.005 1.85.249 2.885.875 2.124 1.288 2.334 3.996 1.625 6.157a7.6 7.6 0 0 1-.836 1.727c1.936-.797 3.319-2.484 3.24-4.686-.047-1.28-.317-1.871-.564-2.389l-.03-.06c-.132-.277-.31-.647-.412-1.054-.271-1.08.175-2.04.614-2.678a.92.92 0 0 1-.387-.493v-.001a2.6 2.6 0 0 0-.58-.817c-.407-.393-1.094-.823-2.236-.901a65 65 0 0 0-2.89-.13c.452.878.758 1.94.289 3.267-.151.426-.46.82-.718 1.183m-.832 1.945c-.719.202-1.214.63-1.378.815-2.717 3.057-5.881 6.689-7.576 8.627 5.45.747 8.601-.49 10.378-1.922 1.295-1.043 1.925-2.24 2.176-3.004.434-1.323.537-3.187-.834-4.018-1.153-.699-2.088-.69-2.766-.498" />
  </Svg>
);
export default SvgYuqueLine;
