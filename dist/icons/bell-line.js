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
const SvgBellLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M14.121 9.879c4.296 4.295 6.829 8.728 5.657 9.9-.475.474-1.486.34-2.807-.273a9.01 9.01 0 0 1-10.59-.474l-.038.039-1.414-1.414.038-.04A9.01 9.01 0 0 1 4.495 7.03c-.614-1.322-.748-2.333-.273-2.808 1.128-1.128 5.277 1.177 9.417 5.182zm-1.414 1.414C10.823 9.409 8.87 7.842 7.236 6.87l-.186.18a7 7 0 0 0-.657 9.142l1.846-1.846a2 2 0 0 1 3.347-1.932 2 2 0 0 1-1.931 3.347l-1.848 1.846a7 7 0 0 0 9.143-.657l.179-.188-.053-.089c-.976-1.615-2.52-3.53-4.369-5.38m7.071-7.071a2 2 0 0 1-.165 2.976 9.02 9.02 0 0 1 .663 8.345 21 21 0 0 0-1.386-2.306 6.99 6.99 0 0 0-1.94-6.187 6.99 6.99 0 0 0-6.187-1.94 21 21 0 0 0-2.306-1.386 9.02 9.02 0 0 1 8.347.663q.066-.086.146-.165a2 2 0 0 1 2.828 0"/>
  </react_native_svg_1.default>);
exports.default = SvgBellLine;
