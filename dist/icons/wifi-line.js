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
const SvgWifiLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M.69 6.997A17.93 17.93 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.93 15.93 0 0 0 12 5C8.19 5 4.694 6.33 1.946 8.553zm3.141 3.89A12.95 12.95 0 0 1 12 8c3.094 0 5.936 1.081 8.169 2.886l-1.257 1.556A10.95 10.95 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442zm3.142 3.89A7.97 7.97 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.98 5.98 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332zm3.142 3.89A3 3 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21z"/>
  </react_native_svg_1.default>);
exports.default = SvgWifiLine;
