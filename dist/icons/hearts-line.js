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
const SvgHeartsLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M19.243 4.757a6 6 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485 2.52 12.993a6 6 0 0 1 8.48-8.464 6 6 0 0 1 8.242.228m-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208 1.614 1.614 0 0 0-2.268.002l-1.772 1.754-1.407-1.396-.363-.36a1.613 1.613 0 0 0-2.266 0m-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562-1.006-1a3.55 3.55 0 0 1 0-5.047 3.614 3.614 0 0 1 5.084 0l.363.36.363-.36a3.6 3.6 0 0 1 1.465-.882 4 4 0 0 0-1.001-3.993 4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.494.154"/>
  </react_native_svg_1.default>);
exports.default = SvgHeartsLine;
