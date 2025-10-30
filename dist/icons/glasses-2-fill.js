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
const SvgGlasses2Fill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M3.031 10.976c.04-1.48.127-2.667.325-3.655.331-1.658.954-2.659 2.199-3.489l-1.11-1.664c-1.754 1.17-2.632 2.669-3.05 4.76C1 8.902 1 11.485 1 14.88V15a5 5 0 1 0 9.935-.806c.33-.125.69-.194 1.065-.194.376 0 .734.069 1.065.194A5 5 0 1 0 23 15v-.12c0-3.396 0-5.979-.394-7.951-.419-2.092-1.296-3.591-3.051-4.761l-1.11 1.664c1.246.83 1.868 1.831 2.2 3.49.197.987.285 2.173.324 3.654A4.98 4.98 0 0 0 18 10a5 5 0 0 0-4.225 2.325A5 5 0 0 0 12 12a5 5 0 0 0-1.775.325A5 5 0 0 0 6 10a4.98 4.98 0 0 0-2.969.976"/>
  </react_native_svg_1.default>);
exports.default = SvgGlasses2Fill;
