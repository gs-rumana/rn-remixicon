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
const SvgPlantLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M5.998 2a7 7 0 0 1 6.197 3.741A6.49 6.49 0 0 1 17.498 3h3.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-1.5v1h5v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-7h5v-2h-2a7 7 0 0 1-7-7V2zm10 13h-8v5h8zm3-10h-1.5a4.5 4.5 0 0 0-4.5 4.5v.5h1.5a4.5 4.5 0 0 0 4.5-4.5zm-13-1h-2a5 5 0 0 0 5 5h2a5 5 0 0 0-5-5"/>
  </react_native_svg_1.default>);
exports.default = SvgPlantLine;
