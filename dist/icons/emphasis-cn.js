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
const SvgEmphasisCn = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M13 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.621 6.302 14.7 14.7 0 0 0 5.327 3.042l-.536 1.93A16.7 16.7 0 0 1 12 13.726 16.7 16.7 0 0 1 5.8 17.273l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042 18 18 0 0 1-2.822-4.3h2.24A16 16 0 0 0 12 10.876a16.2 16.2 0 0 0 2.91-4.876L5 6V4h6V2z"/>
  </react_native_svg_1.default>);
exports.default = SvgEmphasisCn;
