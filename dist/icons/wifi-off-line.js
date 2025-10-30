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
const SvgWifiOffLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A3 3 0 0 1 12 18M2.808 1.393l17.677 17.678-1.414 1.414-5.18-5.18a6 6 0 0 0-1.89-.305c-1.43 0-2.74.499-3.771 1.332l-1.256-1.556a7.96 7.96 0 0 1 4.622-1.766L9 10.414a11 11 0 0 0-3.912 2.029L3.83 10.887A13 13 0 0 1 7.416 8.83L5.132 6.545a16 16 0 0 0-3.185 2.007L.689 6.997c.915-.74 1.903-1.391 2.952-1.942L1.393 2.808zM14.5 10.285l-2.283-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 0 0-4.412-2.158M12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.93 15.93 0 0 0 12 5q-1.319 0-2.58.207L7.726 3.51C9.095 3.177 10.527 3 12 3"/>
  </react_native_svg_1.default>);
exports.default = SvgWifiOffLine;
