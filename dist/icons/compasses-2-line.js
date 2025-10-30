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
const SvgCompasses2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M16.33 13.497a6.99 6.99 0 0 0 2.67-5.5h2a8.99 8.99 0 0 1-3.661 7.246l2.527 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108a9 9 0 0 1-3.607.752 9 9 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.064-8.77A4.002 4.002 0 0 1 11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.803 6.728zM14.6 14.498l-1.528-2.646a4 4 0 0 1-2.142 0l-1.528 2.646c.804.322 1.68.499 2.599.499a7 7 0 0 0 2.599-.499M12 9.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  </react_native_svg_1.default>);
exports.default = SvgCompasses2Line;
