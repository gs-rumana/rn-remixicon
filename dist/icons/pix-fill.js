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
const SvgPixFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M14.475 1.768a3.5 3.5 0 0 0-4.95 0L5.4 5.894a4 4 0 0 1 3.079 1.164l2.992 2.993a.75.75 0 0 0 1.061 0l2.992-2.993a4 4 0 0 1 3.08-1.163zm5.979 5.978 1.779 1.78a3.5 3.5 0 0 1 .015 4.933l-1.774 1.774a3 3 0 0 1-4.243 0l-2.993-2.993a1.75 1.75 0 0 0-2.475 0L7.77 16.234a3 3 0 0 1-4.243 0l-1.78-1.78a3.5 3.5 0 0 1 .021-4.929l1.775-1.774a3 3 0 0 1 4.228.014l2.992 2.993a1.75 1.75 0 0 0 2.475 0l2.993-2.993a3 3 0 0 1 4.223-.019M5.398 18.105a4 4 0 0 0 3.079-1.164l2.993-2.994a.75.75 0 0 1 1.061 0l2.993 2.994a4 4 0 0 0 3.08 1.163l-4.129 4.128a3.5 3.5 0 0 1-4.95 0z"/>
  </react_native_svg_1.default>);
exports.default = SvgPixFill;
