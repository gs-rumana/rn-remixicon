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
const SvgFingerprint2Fill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 1a9 9 0 0 1 9 9v4a8.99 8.99 0 0 1-3.811 7.355c.527-1.692.811-3.49.811-5.355v-2.001h-2V16l-.003.315a15.9 15.9 0 0 1-1.431 6.315 9.1 9.1 0 0 1-3.576.314A12.93 12.93 0 0 0 13 16V9h-2v7l-.004.288c-.059 2.301-.825 4.426-2.088 6.167a9 9 0 0 1-2.625-1.503A7.96 7.96 0 0 0 8 16v-6l.005-.2c.033-.667.229-1.29.549-1.832L7.109 6.523A5.97 5.97 0 0 0 6 10v6l-.004.225a5.97 5.97 0 0 1-1.12 3.272A8.95 8.95 0 0 1 3 14v-4a9 9 0 0 1 9-9m0 3c-1.296 0-2.496.41-3.476 1.11l1.444 1.444A4 4 0 0 1 16 10v2h2v-2a6 6 0 0 0-6-6"/>
  </react_native_svg_1.default>);
exports.default = SvgFingerprint2Fill;
