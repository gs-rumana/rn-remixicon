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
const SvgDropperFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M15.536 2.807a4 4 0 0 1 5.656 5.657l-2.828 2.829.354.354a1 1 0 0 1-1.415 1.414l-.353-.354-6.215 6.215a4 4 0 0 1-2.044 1.094l-1.754.35a2 2 0 0 0-1.022.548l-.986.986a1 1 0 0 1-1.414 0L2.1 20.485a1 1 0 0 1 0-1.414l.986-.986a2 2 0 0 0 .546-1.022l.351-1.754a4 4 0 0 1 1.094-2.044l6.215-6.215-.354-.353a1 1 0 0 1 1.415-1.414l.353.353zm-2.829 5.658-6.215 6.214a2 2 0 0 0-.547 1.022l-.35 1.755A4 4 0 0 1 4.5 19.5a4 4 0 0 1 2.044-1.094l1.754-.351a2 2 0 0 0 1.022-.547l6.215-6.215z"/>
  </react_native_svg_1.default>);
exports.default = SvgDropperFill;
