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
const SvgBrain2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M7 6q.001.357.115.67a1 1 0 0 1-1 1.333L6 8a2 2 0 0 0-1.491 3.333 1 1 0 0 1 0 1.334 2.001 2.001 0 0 0 .864 3.233 1 1 0 0 1 .67 1.135 2.5 2.5 0 1 0 4.932.824q.009-.063.025-.123V6a2 2 0 1 0-4 0m6 11.736q.016.06.025.122a2.5 2.5 0 1 0 4.932-.823 1 1 0 0 1 .67-1.135 2 2 0 0 0 .864-3.233 1 1 0 0 1 0-1.334 2 2 0 0 0-1.607-3.33 1 1 0 0 1-.999-1.333q.113-.313.115-.67a2 2 0 1 0-4 0zM9 2a4 4 0 0 1 3 1.354 4 4 0 0 1 6.998 2.771A4.002 4.002 0 0 1 21.465 12 3.997 3.997 0 0 1 20 17.465v.035a4.5 4.5 0 0 1-8 2.828A4.5 4.5 0 0 1 4 17.5v-.035A3.997 3.997 0 0 1 2.535 12a4.002 4.002 0 0 1 2.467-5.874L5 6a4 4 0 0 1 4-4"/>
  </react_native_svg_1.default>);
exports.default = SvgBrain2Line;
