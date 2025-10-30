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
const SvgArmchairLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8 3a4 4 0 0 0-4 4v2.126a4.002 4.002 0 0 0-1 7.339V21h2v-1h14v1h2v-4.535a4.002 4.002 0 0 0-1-7.339V7a4 4 0 0 0-4-4zm10 6.126c-1.725.444-3 2.01-3 3.874H9a4 4 0 0 0-3-3.874V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM9 15h6v1h2v-3a2 2 0 1 1 2.667 1.886 1 1 0 0 0-.667.943V18H5v-2.17a1 1 0 0 0-.667-.944A2.001 2.001 0 0 1 5 11a2 2 0 0 1 2 2v3h2z"/>
  </react_native_svg_1.default>);
exports.default = SvgArmchairLine;
