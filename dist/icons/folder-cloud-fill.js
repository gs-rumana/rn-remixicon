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
const SvgFolderCloudFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M2 4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v6.36c-.998-1.42-2.646-2.36-4.5-2.36-2.602 0-4.799 1.853-5.36 4.282A4.74 4.74 0 0 0 10 18.25c0 1.025.325 1.974.877 2.75H3a1 1 0 0 1-1-1zm12.002 11.603A2.751 2.751 0 0 0 14.75 21h5.5a2.75 2.75 0 0 0 .749-5.397C21.055 13.658 19.448 12 17.5 12s-3.555 1.658-3.498 3.603"/>
  </react_native_svg_1.default>);
exports.default = SvgFolderCloudFill;
