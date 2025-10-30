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
const SvgAlibabaCloudFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9.514 5.14H4.68A3.68 3.68 0 0 0 1 8.82v6.358a3.68 3.68 0 0 0 3.68 3.68h4.85L8.36 17.2 4.822 16.12a1.54 1.54 0 0 1-1.07-1.472V9.37A1.53 1.53 0 0 1 4.822 7.9l3.536-1.104zm9.825 0h-4.85l1.17 1.656L19.195 7.9a1.53 1.53 0 0 1 1.067 1.471v5.277a1.535 1.535 0 0 1-1.067 1.472L15.66 17.2l-1.17 1.656h4.85a3.66 3.66 0 0 0 3.66-3.68V8.82a3.68 3.68 0 0 0-3.66-3.68m-3.672 5.998h-7.33v1.652h7.33z"/>
  </react_native_svg_1.default>);
exports.default = SvgAlibabaCloudFill;
