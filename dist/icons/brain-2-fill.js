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
const SvgBrain2Fill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.5 2a3.5 3.5 0 0 0-3.46 4.03A3.5 3.5 0 0 0 3.05 12a3.5 3.5 0 0 0 .963 5.67Q4 17.832 4 18a4 4 0 0 0 7 2.646V3.05A3.5 3.5 0 0 0 8.5 2M13 3.05v17.596a4 4 0 0 0 6.986-2.977A3.5 3.5 0 0 0 20.95 12a3.5 3.5 0 0 0-1.99-5.97q.04-.26.041-.53a3.5 3.5 0 0 0-6-2.45"/>
  </react_native_svg_1.default>);
exports.default = SvgBrain2Fill;
