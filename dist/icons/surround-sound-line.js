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
const SvgSurroundSoundLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.05 4.121 1.414 1.415A4.98 4.98 0 0 0 7 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.98 6.98 0 0 1 5 12.07c0-1.933.784-3.683 2.05-4.95m9.9 0a6.98 6.98 0 0 1 2.05 4.95 6.98 6.98 0 0 1-2.05 4.95l-1.414-1.414A4.98 4.98 0 0 0 17 12.07c0-1.38-.56-2.63-1.464-3.535zM12 13.071a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  </react_native_svg_1.default>);
exports.default = SvgSurroundSoundLine;
