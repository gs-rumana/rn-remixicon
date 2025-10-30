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
const SvgEyeCloseFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m10.13 15.842-.787 2.94-1.932-.517.787-2.94a11 11 0 0 1-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.96 10.96 0 0 1-2.371-5.07l.9-.164A16.92 16.92 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.96 10.96 0 0 1-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a11 11 0 0 1-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.1 11.1 0 0 1-3.74 0"/>
  </react_native_svg_1.default>);
exports.default = SvgEyeCloseFill;
