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
const SvgStrikethrough = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M17.154 14q.346.774.346 1.72 0 2.014-1.571 3.147Q14.357 20 11.586 20q-2.46 0-4.87-1.145v-2.254q2.28 1.316 4.666 1.316 3.826 0 3.839-2.197a2.2 2.2 0 0 0-.648-1.603l-.12-.117H3v-2h18v2zm-4.078-3H7.629a4 4 0 0 1-.481-.522Q6.5 9.643 6.5 8.452q0-1.854 1.397-3.153T12.222 4q2.207 0 4.222.984v2.152q-1.8-1.03-3.946-1.03-3.72 0-3.719 2.346 0 .63.654 1.099.654.47 1.613.75.93.27 2.03.699"/>
  </react_native_svg_1.default>);
exports.default = SvgStrikethrough;
