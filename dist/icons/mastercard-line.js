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
const SvgMastercardLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12.001 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588m1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.27 7.27 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91m-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.27 7.27 0 0 1 8.401 12c0-1.89.719-3.614 1.898-4.91m1.702 1.115a5.28 5.28 0 0 0-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.28 5.28 0 0 0 1.6-3.795 5.28 5.28 0 0 0-1.6-3.795"/>
  </react_native_svg_1.default>);
exports.default = SvgMastercardLine;
