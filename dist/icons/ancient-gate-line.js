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
const SvgAncientGateLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3M16.9 6.658A5.4 5.4 0 0 1 15.59 5H8.411A5.4 5.4 0 0 1 7.1 6.658 6 6 0 0 1 6.667 7h10.666a6 6 0 0 1-.434-.342M21.5 11.5c.538 0 1.042-.142 1.479-.39q.021.192.021.39a3.5 3.5 0 0 1-2 3.163V21h-7v-2a2 2 0 1 0-4 0v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553 2.999 2.999 0 0 0 4.077-1.11h13.803a3 3 0 0 0 2.599 1.5m-2.537 1.309a5 5 0 0 1-1.038-.81H6.075q-.457.467-1.038.81-.304.18-.622.312L5 13.4V19h3q0-1.657 1.172-2.828A3.85 3.85 0 0 1 12 15q1.657 0 2.828 1.172A3.85 3.85 0 0 1 16 19h3v-5.6l.585-.278a5 5 0 0 1-.622-.312"/>
  </react_native_svg_1.default>);
exports.default = SvgAncientGateLine;
