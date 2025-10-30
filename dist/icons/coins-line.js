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
const SvgCoinsLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M14.005 2.003a8 8 0 0 1 3.292 15.293A8 8 0 1 1 6.711 6.71a8 8 0 0 1 7.294-4.707m-4 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m1 1v1h2v2h-4a.5.5 0 0 0-.09.992l.09.008h2a2.5 2.5 0 0 1 0 5v1h-2v-1h-2v-2h4a.5.5 0 0 0 .09-.992l-.09-.008h-2a2.5 2.5 0 0 1 0-5v-1zm3-5A5.99 5.99 0 0 0 9.52 6.016a8 8 0 0 1 8.47 8.471 6 6 0 0 0-3.986-10.484"/>
  </react_native_svg_1.default>);
exports.default = SvgCoinsLine;
