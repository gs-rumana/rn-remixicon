import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMastodonLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3.019 12.008c-.032-1.26-.012-2.448-.012-3.442 0-4.338 2.843-5.61 2.843-5.61C7.283 2.298 9.742 2.021 12.3 2h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.396 5.424-.275 1.41-2.457 2.955-4.963 3.254-1.306.156-2.593.3-3.965.236-2.244-.102-4.014-.535-4.014-.535q0 .328.04.62c.084.633.299 1.095.605 1.435.766.85 2.106.93 3.395.974 1.82.063 3.44-.449 3.44-.449l.075 1.646s-1.273.684-3.54.81c-1.251.068-2.804-.032-4.613-.51-1.532-.406-2.568-1.29-3.27-2.471-1.093-1.843-1.368-4.406-1.431-6.992m3.3 4.937v-2.548l2.474.605q.073.018.324.07a21.914 21.914 0 0 0 3.307.41c1.019.047 1.9-.017 3.636-.224 1.663-.199 3.148-1.196 3.236-1.65.082-.422.151-.922.206-1.482.07-.705.114-1.47.137-2.245.015-.51.02-.945.017-1.256v-.059c0-1.43-.369-2.438-.963-3.158a3 3 0 0 0-.584-.548c-.09-.064-.135-.089-.13-.087-1.013-.465-3.093-.752-5.617-.773h-.046c-2.54.02-4.62.308-5.65.782.023-.01-.021.014-.112.078a3 3 0 0 0-.584.548c-.594.72-.963 1.729-.963 3.158 0 .232 0 .397-.003.875a78 78 0 0 0 .014 2.518c.054 2.197.264 3.835.7 5.041q.318.88.78 1.45a5.7 5.7 0 0 1-.18-1.505M8.085 6.37a1.143 1.143 0 1 1 0 2.287 1.143 1.143 0 0 1 0-2.287" />
  </Svg>
);
export default SvgMastodonLine;
