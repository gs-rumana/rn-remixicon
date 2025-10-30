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
const SvgLungsFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.5 5.5c1.412.47 2.048 2.159 2.327 4.023l-4.523 2.611 1 1.732 3.71-2.141C11.06 13.079 11 14.309 11 15c0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5M22.001 17v.436c-.005 3.564-.15 3.564-4 3.564-4 0-5-3-5-6 0-.691-.06-1.92-.014-3.274l3.71 2.14 1-1.732-4.523-2.61c.279-1.865.915-3.553 2.327-4.024 3-1 6.5 4 6.5 11.5M13 2v9h-2V2z"/>
  </react_native_svg_1.default>);
exports.default = SvgLungsFill;
