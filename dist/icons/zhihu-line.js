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
const SvgZhihuLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12.345 17.963-1.688 1.074-2.132-3.35c-.44 1.402-1.171 2.665-2.138 3.825-.402.483-.82.918-1.301 1.376-.155.146-.775.716-.878.82l-1.414-1.415c.139-.139.787-.735.914-.856.43-.408.796-.79 1.143-1.205C6.117 16.712 6.88 15.02 6.988 13H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.858L2.486 8.143c1.396-.838 2.426-2.603 3.039-5.36l1.952.434q-.21.95-.489 1.783h4.513v2H9v4h2.5v2H9.186zm3.838-.07L17.3 17h1.702V7h-4v10h.736zM13.001 5h8v14h-3l-2.5 2-1-2H13z"/>
  </react_native_svg_1.default>);
exports.default = SvgZhihuLine;
