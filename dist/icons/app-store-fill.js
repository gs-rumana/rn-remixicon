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
const SvgAppStoreFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M8.823 15.343q-.591-.716-1.479-.509l-.15.041-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1-.802-1.392h1.19a.82.82 0 0 0 .822-.823.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092-.367.633-.359-.633a.824.824 0 0 0-1.476.722l.049.1.838 1.457-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124"/>
  </react_native_svg_1.default>);
exports.default = SvgAppStoreFill;
