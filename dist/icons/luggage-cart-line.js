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
const SvgLuggageCartLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M5.5 20a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m13 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M2.172 1.757 6 5.585V17L20 17v2H5a1 1 0 0 1-1-1V6.413L.758 3.172zM16 3a1 1 0 0 1 1 1v2h2.994C20.55 6 21 6.456 21 6.995v8.01a1 1 0 0 1-1.006.995H8.007A1.01 1.01 0 0 1 7 15.005v-8.01A1 1 0 0 1 8.007 6H11V4a1 1 0 0 1 1-1zm-6 5H9v6h1zm6 0h-4v6h4zm3 0h-1v6h1zm-4-3h-2v1h2z"/>
  </react_native_svg_1.default>);
exports.default = SvgLuggageCartLine;
