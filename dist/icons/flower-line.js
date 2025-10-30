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
const SvgFlowerLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12 2.076.455.233a12.05 12.05 0 0 1 4.402 3.846 12 12 0 0 1 2.962-.957L21 4.98V13a9 9 0 0 1-18 0V4.98l1.18.218c1.041.19 2.035.516 2.963.957a12.05 12.05 0 0 1 4.402-3.846zm-3.122 5.09A12.1 12.1 0 0 1 12 10.363a12.1 12.1 0 0 1 3.122-3.199A10.06 10.06 0 0 0 12 4.337a10.1 10.1 0 0 0-3.122 2.828m2.021 5.268a10.05 10.05 0 0 0-3.908-4.102A10 10 0 0 0 5 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12 12 0 0 1 10 17c0-1.617.32-3.159.9-4.566m1.554 7.552A7 7 0 0 0 19 13V7.457A9.996 9.996 0 0 0 12 17c0 1.042.159 2.045.453 2.987"/>
  </react_native_svg_1.default>);
exports.default = SvgFlowerLine;
