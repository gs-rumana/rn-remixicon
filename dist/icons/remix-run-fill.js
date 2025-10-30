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
const SvgRemixRunFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path fill="#121212" d="M19.116 20c0-1.064 0-2.04-.162-4.119-.2-2.09-1.289-3.148-3.15-3.52 2.205-.286 3.837-2.004 3.837-4.637C19.64 4.204 17.32 2 12.656 2H4v3.669h7.797c2.061 0 3.092.884 3.092 2.344 0 1.66-1.03 2.287-3.092 2.287H4v3.75h7.568c1.632 0 2.52.457 2.662 2.518a25 25 0 0 1 .082 2.773v.003c-.004.214-.008.425-.008.656zM4 17.205V20h6.122v-1.79c0-.375-.184-1.005-1.034-1.005z"/>
  </react_native_svg_1.default>);
exports.default = SvgRemixRunFill;
