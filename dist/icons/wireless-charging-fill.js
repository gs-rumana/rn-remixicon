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
const SvgWirelessChargingFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m3.929 4.929 1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12a9.97 9.97 0 0 1 2.929-7.071m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.104.448 2.105 1.172 2.828l-1.415 1.415A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A3.99 3.99 0 0 0 17 12a3.99 3.99 0 0 0-1.17-2.827z"/>
  </react_native_svg_1.default>);
exports.default = SvgWirelessChargingFill;
