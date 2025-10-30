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
const SvgAccessibilityLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1c-1.557 0-3.178-.357-4.629-.929L6.63 10.43c1.076.429 2.228.718 3.37.901 0 .87.086 1.764-.316 2.567l-1.578 3.156 1.79.894 1.552-3.105a.618.618 0 0 1 1.106 0l1.552 3.105 1.79-.894-1.578-3.156C13.915 13.094 14 12.2 14 11.33a16.5 16.5 0 0 0 3.359-.897c.025-.01-.73-1.862-.733-1.86-1.453.566-3.067.927-4.626.927"/>
  </react_native_svg_1.default>);
exports.default = SvgAccessibilityLine;
