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
const SvgVimeoFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M1.174 8.301c-.281-.413-.252-.413.328-.922 1.232-1.082 2.394-2.266 3.736-3.212 1.215-.852 2.826-1.402 3.927-.047 1.014 1.249 1.038 3.142 1.295 4.65.257 1.564.503 3.164 1.051 4.66.152.421.443 1.217.968 1.284.678.093 1.368-1.096 1.683-1.54.817-1.18 1.925-2.769 1.785-4.286-.138-1.612-1.878-1.309-2.966-.924.175-1.809 1.858-3.843 3.48-4.53 1.72-.714 4.276-.702 5.14 1.237.922 2.102.093 4.543-.912 6.448-1.096 2.068-2.509 3.982-4.018 5.77-1.331 1.588-2.906 3.33-4.89 4.089-2.267.864-3.61-.82-4.382-2.77-.843-2.123-1.262-4.506-1.87-6.716-.256-.935-.56-1.998-1.167-2.77-.792-.994-1.692-.059-2.474.478-.27-.267-.491-.607-.714-.899"/>
  </react_native_svg_1.default>);
exports.default = SvgVimeoFill;
