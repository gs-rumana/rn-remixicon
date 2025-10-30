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
const SvgRadarLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12.507 3.623-1.024 1.772c-2.91-.879-5.513-.45-6.41 1.105-1.178 2.04.79 5.652 4.677 7.897 3.888 2.245 8.001 2.142 9.179.103.897-1.555-.033-4.024-2.25-6.105l1.024-1.772c3.082 2.709 4.462 6.27 2.957 8.877-1.86 3.222-7.188 3.355-11.91.63C4.03 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.167-1.877m3.377-1.85 1.732 1-5 8.66-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922 1 1 0 0 1 .131-.578l2.25-3.897 1.732 1z"/>
  </react_native_svg_1.default>);
exports.default = SvgRadarLine;
