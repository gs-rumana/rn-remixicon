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
const SvgInfinityLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M3 12a3.5 3.5 0 0 1 3.5-3.5c1.204 0 2.02.434 2.7 1.113.726.727 1.285 1.72 1.926 2.873l.034.06c.6 1.082 1.283 2.311 2.227 3.255 1.008 1.008 2.316 1.699 4.113 1.699a5.5 5.5 0 1 0-4.158-9.1 24 24 0 0 1 1.122 1.857A3.5 3.5 0 1 1 17.5 15.5c-1.203 0-2.02-.434-2.7-1.113-.726-.727-1.285-1.72-1.926-2.873l-.034-.06c-.6-1.082-1.283-2.311-2.227-3.255C9.605 7.191 8.297 6.5 6.5 6.5a5.5 5.5 0 1 0 4.158 9.1 24 24 0 0 1-1.122-1.857A3.5 3.5 0 0 1 3 12"/>
  </react_native_svg_1.default>);
exports.default = SvgInfinityLine;
