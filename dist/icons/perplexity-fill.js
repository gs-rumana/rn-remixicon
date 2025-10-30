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
const SvgPerplexityFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m5.735 2 5.695 5.247V2.012h1.109v5.259L18.259 2v5.983h2.349v8.629h-2.342v5.327l-5.727-5.032v5.09h-1.11V16.99L5.742 22v-5.388H3.393v-8.63h2.342zm4.86 7.078H4.5v6.439H5.74v-2.031zM6.85 13.972v5.585l4.58-4.034V9.81zm5.72 1.497 4.588 4.03v-2.887h-.006v-2.646l-4.582-4.16zm5.696.048H19.5v-6.44h-6.047l4.814 4.363zm-1.115-7.534V4.519l-3.76 3.464zm-6.548 0-3.76-3.464v3.464z"/>
  </react_native_svg_1.default>);
exports.default = SvgPerplexityFill;
