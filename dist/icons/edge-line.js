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
const SvgEdgeLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.008 14.001A5 5 0 0 0 8 14.25c0 2.382 1.753 4.75 5 4.75 2.373 0 4.528-.655 6-1.553v3.35c-1.789.767-3.888 1.203-6 1.203-5.502 0-8-3.47-8-7.75 0-3.231 2.041-6 4.943-7.164C8.54 8.663 8 10.341 8 10.996l10 .004c0-3.406-2.548-6-6-6-5 0-8.001 3.988-9 5.999.29-4.762 4.01-8.999 9-8.999 5.2 0 9 4.03 9 9v3h-13z"/>
  </react_native_svg_1.default>);
exports.default = SvgEdgeLine;
