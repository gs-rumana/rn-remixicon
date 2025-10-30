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
const SvgBluetoothConnectFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m14.311 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.415-1.415 5.779-5.778v-.97L5.219 5.737l1.415-1.415 4.364 4.364V2h2l5.656 5.657zm-1.313 1.515v5.657l2.828-2.829zm0-3.03 2.828-2.828-2.828-2.829zM19.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
  </react_native_svg_1.default>);
exports.default = SvgBluetoothConnectFill;
