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
const SvgAccessibilityFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-6.871 3.428.742-1.857c1.45.572 3.072.929 4.629.929 1.56 0 3.173-.361 4.626-.928.003 0 .758 1.851.733 1.861a16.5 16.5 0 0 1-3.36.897c0 .87-.084 1.764.318 2.567l1.577 3.156-1.789.894-1.552-3.105a.618.618 0 0 0-1.106 0l-1.553 3.105-1.789-.894 1.578-3.156c.402-.803.317-1.697.317-2.567-1.143-.183-2.295-.472-3.371-.902"/>
  </react_native_svg_1.default>);
exports.default = SvgAccessibilityFill;
