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
const SvgPixLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m14.473 1.745 7.778 7.778a3.5 3.5 0 0 1 0 4.95l-7.778 7.778a3.5 3.5 0 0 1-4.95 0l-7.778-7.778a3.5 3.5 0 0 1 0-4.95l7.778-7.778a3.5 3.5 0 0 1 4.95 0m-2.475 13.082-2.475 2.475c-.38.38-.825.653-1.299.822l2.713 2.713a1.5 1.5 0 0 0 2.122 0l2.713-2.713a3.5 3.5 0 0 1-1.3-.822zm-6.01-6.719-2.829 2.83a1.5 1.5 0 0 0 0 2.12l2.829 2.83a1.5 1.5 0 0 0 2.12 0l2.476-2.476a2 2 0 0 1 2.828 0l2.475 2.475a1.5 1.5 0 0 0 2.121 0l2.829-2.828a1.5 1.5 0 0 0 0-2.121l-2.829-2.829a1.5 1.5 0 0 0-2.121 0l-2.475 2.475a2 2 0 0 1-2.828 0L8.109 8.109a1.5 1.5 0 0 0-2.12 0m4.95-4.949L8.223 5.872c.474.17.92.443 1.299.823l2.475 2.475 2.475-2.475c.38-.38.824-.654 1.299-.823L13.059 3.16a1.5 1.5 0 0 0-2.122 0"/>
  </react_native_svg_1.default>);
exports.default = SvgPixLine;
