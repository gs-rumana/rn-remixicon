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
const SvgToothFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 3.232a6.51 6.51 0 0 1 3.266 4.034 1 1 0 0 0 1.928-.532A8.5 8.5 0 0 0 14.5 2.519q.248-.02.5-.019c2.007 0 3.68.728 4.83 2.11C20.963 5.967 21.5 7.846 21.5 10c0 3.097-.514 5.865-1.395 7.898-.84 1.938-2.208 3.602-4.105 3.602-1.1 0-1.787-.652-2.195-1.36-.362-.63-.578-1.423-.752-2.062-.207-.76-.366-1.328-.592-1.72C12.276 16.035 12.15 16 12 16s-.275.035-.461.358c-.226.392-.385.96-.592 1.72-.174.639-.39 1.433-.752 2.062C9.787 20.848 9.1 21.5 8 21.5c-1.897 0-3.265-1.664-4.105-3.602C3.015 15.865 2.5 13.098 2.5 10c0-2.154.538-4.033 1.67-5.39C5.32 3.228 6.992 2.5 9 2.5h.028A6.5 6.5 0 0 1 12 3.232"/>
  </react_native_svg_1.default>);
exports.default = SvgToothFill;
