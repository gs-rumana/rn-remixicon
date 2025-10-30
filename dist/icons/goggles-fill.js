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
const SvgGogglesFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M4.952 6.942C7.08 6.118 9.75 6 12 6s4.92.118 7.049.942c1.08.419 2.08 1.04 2.81 1.974C22.596 9.862 23 11.054 23 12.5c0 1.47-.525 2.933-1.38 4.042C20.77 17.647 19.504 18.5 18 18.5c-1.425 0-2.656-.79-3.575-1.38C13.72 16.667 12.883 16 12 16s-1.72.667-2.425 1.12c-.919.59-2.15 1.38-3.575 1.38-1.503 0-2.769-.852-3.62-1.958A6.74 6.74 0 0 1 1 12.5c0-1.446.402-2.638 1.142-3.584.729-.933 1.728-1.555 2.81-1.974"/>
  </react_native_svg_1.default>);
exports.default = SvgGogglesFill;
