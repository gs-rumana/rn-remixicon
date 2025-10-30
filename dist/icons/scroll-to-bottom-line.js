"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
const SvgScrollToBottomLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.013 4.565C8.753 4.169 9.559 4 11.14 4h1.718c1.582 0 2.387.169 3.128.565q.945.504 1.448 1.448c.396.74.565 1.546.565 3.128v5.718c0 1.582-.169 2.387-.565 3.128a3.45 3.45 0 0 1-1.448 1.448c-.74.396-1.546.565-3.128.565H11.14c-1.582 0-2.387-.169-3.128-.565a3.45 3.45 0 0 1-1.448-1.448C6.169 17.247 6 16.441 6 14.86V9.14c0-1.582.169-2.387.565-3.128a3.45 3.45 0 0 1 1.448-1.448M12.859 2H11.14c-2.014 0-3.094.278-4.072.801A5.45 5.45 0 0 0 4.801 5.07C4.278 6.047 4 7.127 4 9.141v5.718c0 2.014.278 3.094.801 4.071A5.45 5.45 0 0 0 7.07 21.2c.978.522 2.058.801 4.072.801h1.718c2.014 0 3.094-.279 4.071-.801A5.45 5.45 0 0 0 19.2 18.93c.522-.977.801-2.057.801-4.071V9.14c0-2.014-.279-3.094-.801-4.072a5.45 5.45 0 0 0-2.269-2.268C15.953 2.278 14.873 2 12.86 2M13 6h-2v5h2zm-5.242 7.758L12 18.001l4.242-4.243-1.414-1.414L12 15.172l-2.829-2.828z"/>
  </react_native_svg_1.default>);
exports.default = SvgScrollToBottomLine;
