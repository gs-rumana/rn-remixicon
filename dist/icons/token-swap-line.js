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
const SvgTokenSwapLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9 12.5 6.5 15 9 17.5l2.5-2.5zm6-10a6.5 6.5 0 0 0-6.482 6.018 6.5 6.5 0 1 0 6.964 6.964A6.5 6.5 0 0 0 15 2.5m.323 10.989a6.51 6.51 0 0 0-4.812-4.812 4.5 4.5 0 1 1 4.812 4.812M13.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M3 7a4 4 0 0 1 4-4h1.5v2H7a2 2 0 0 0-2 2v1.5H3zm16 10v-1.5h2V17a4 4 0 0 1-4 4h-1.5v-2H17a2 2 0 0 0 2-2"/>
  </react_native_svg_1.default>);
exports.default = SvgTokenSwapLine;
