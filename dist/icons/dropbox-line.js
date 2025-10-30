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
const SvgDropboxLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m8.65 17.26 3.392 2.162 3.392-2.161 1.86 1.185-5.252 3.346-5.252-3.346zm-.876-8.28 2.393-1.553L7.74 5.854 5.286 7.37zm1.84 1.19 2.39 1.548 2.391-1.547-2.39-1.552zm4.231 2.74 2.424 1.568 2.45-1.502-2.486-1.612zm-1.84-6.675 4.236-2.748 6.225 3.843-4.393 2.843 4.394 2.851-6.227 3.818-4.235-2.741-4.236 2.74-6.229-3.817 4.395-2.851L1.543 7.33l6.225-3.843zm1.836 1.192 2.394 1.553 2.488-1.61-2.455-1.517zm-3.677 5.483-2.39-1.547-2.485 1.613 2.451 1.502z"/>
  </react_native_svg_1.default>);
exports.default = SvgDropboxLine;
