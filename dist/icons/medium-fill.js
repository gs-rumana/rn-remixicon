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
const SvgMediumFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M6.158 3h11.684A3.16 3.16 0 0 1 21 6.158v3.366a4 4 0 0 0-.245-.008 2.913 2.913 0 0 0-2.294 1.1c-.472.586-.758 1.377-.828 2.266q-.022.266-.017.532c.047 2.014 1.135 3.624 3.068 3.624q.162 0 .316-.015v.82A3.16 3.16 0 0 1 17.842 21H6.158A3.16 3.16 0 0 1 3 17.842V6.158A3.16 3.16 0 0 1 6.158 3M21 15.388v-2.726h-1.653c-.074 1.316.646 2.43 1.653 2.726m0-3.107V9.973a1 1 0 0 0-.256-.035c-.815.017-1.3.992-1.36 2.343zM17.697 7.3l.015-.003v-.11h-2.9l-2.69 6.326L9.43 7.187H6.306v.11l.014.003c.529.12.797.298.797.94v7.52c0 .642-.27.82-.798.94l-.014.002v.11h2.12v-.11L8.41 16.7c-.529-.12-.798-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.046.508-.312.665-.791.773l-.014.003v.109h3.692v-.11l-.015-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.268-.82.797-.94"/>
  </react_native_svg_1.default>);
exports.default = SvgMediumFill;
