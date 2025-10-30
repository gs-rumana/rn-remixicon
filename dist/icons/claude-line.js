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
const SvgClaudeLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.644 2.553a1 1 0 1 0-1.788.894L9.68 9.1 5.067 5.926a1 1 0 0 0-1.134 1.648l5.472 3.762L3.053 11A1 1 0 1 0 2.947 13l5.795.305-4.297 2.864a1 1 0 1 0 1.11 1.664l3.642-2.428-2.51 3.515a1 1 0 1 0 1.627 1.162l3.033-4.246-.833 5a1 1 0 0 0 1.972.33l.802-4.812 2.37 3.688a1 1 0 0 0 1.683-1.082l-1.786-2.778 2.767 2.554a1 1 0 0 0 1.356-1.47l-3.035-2.802 4.233.53a1 1 0 0 0 .248-1.985l-4.19-.524 4.295-1.01a1 1 0 1 0-.458-1.947l-5.59 1.315 4.105-5.224a1 1 0 1 0-1.572-1.236L13.857 9.29l.881-5.636a1 1 0 1 0-1.976-.308l-.886 5.67z"/>
  </react_native_svg_1.default>);
exports.default = SvgClaudeLine;
