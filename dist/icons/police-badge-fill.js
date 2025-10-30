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
const SvgPoliceBadgeFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M2.913 11.674C3.236 10.195 3.54 8.808 2 6.5l3.5-4S9 4 12 1.5c3 2.5 6.5 1 6.5 1l3.5 4c-1.539 2.308-1.236 3.695-.913 5.174.306 1.404.63 2.89-.587 5.326-1.157 2.315-3.152 3.123-5.015 3.877-1.356.55-2.642 1.07-3.485 2.123-.842-1.053-2.129-1.574-3.485-2.123C6.652 20.123 4.658 19.315 3.5 17c-1.218-2.435-.893-3.922-.587-5.326m11.465 1.099 2.377-2.318-3.286-.478L12 7 10.53 9.977l-3.285.478 2.377 2.318-.561 3.272L12 14.5l2.939 1.545z"/>
  </react_native_svg_1.default>);
exports.default = SvgPoliceBadgeFill;
