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
const SvgChromeLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m10.365 19.833 1.93-3.342q-.147.009-.295.009a4.5 4.5 0 0 1-3.94-2.325L4.795 8.52a8.003 8.003 0 0 0 5.57 11.313m2.225.146A8 8 0 0 0 19.602 9.5h-3.86c.479.715.758 1.575.758 2.5 0 .848-.234 1.64-.642 2.318zm1.553-6.691.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.499 2.499 0 0 0 4.308.037m-8.108-6.62 1.928 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.99 7.99 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/>
  </react_native_svg_1.default>);
exports.default = SvgChromeLine;
