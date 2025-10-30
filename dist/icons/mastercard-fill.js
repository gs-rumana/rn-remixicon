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
const SvgMastercardFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12.001 6.654a6.79 6.79 0 0 1 2.596 5.344A6.79 6.79 0 0 1 12 17.34a6.79 6.79 0 0 1-2.596-5.343 6.79 6.79 0 0 1 2.596-5.344m-.87-.582A7.78 7.78 0 0 0 8.402 12a7.78 7.78 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854m1.742 11.854A7.78 7.78 0 0 0 15.602 12a7.78 7.78 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854"/>
  </react_native_svg_1.default>);
exports.default = SvgMastercardFill;
