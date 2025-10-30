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
const SvgPokerHeartsLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12 8.81 1.635-2.322A3.5 3.5 0 0 1 20 8.5c0 2.879-1.96 5.621-4.357 7.836A27 27 0 0 1 12 19.146a27.064 27.064 0 0 1-3.643-2.81C5.959 14.122 4 11.379 4 8.5a3.5 3.5 0 0 1 6.365-2.012zm-1.444-4.884A5.5 5.5 0 0 0 2 8.5C2 16 12 21.485 12 21.485S22 16 22 8.5a5.5 5.5 0 0 0-10-3.163 5.5 5.5 0 0 0-1.444-1.41"/>
  </react_native_svg_1.default>);
exports.default = SvgPokerHeartsLine;
