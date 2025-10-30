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
const SvgEdgeFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M20.645 8.586c-.17-.711-.441-1.448-.774-2.021-.771-1.329-1.464-2.237-3.177-3.32S13.077 2 12.171 2c-2.415 0-4.211.86-5.525 1.887C3.345 6.47 3.001 11 3.001 11s1.221-2.045 3.54-3.526C7.944 6.579 9.942 6 11.569 6c4.317 0 4.432 4 4.432 4h-7c0-2 1-3 1-3s-5 2-5 7.044c0 .487-.003 1.372.248 2.283.232.843.7 1.705 1.132 2.353 1.221 1.832 3.045 2.614 3.916 2.904.996.332 2.029.416 3.01.416 2.72 0 4.877-.886 5.694-1.275v-4.172c-.758.454-2.679 1.447-5 1.447-5 0-5-4-5-4h12v-2.49s-.039-1.593-.356-2.924"/>
  </react_native_svg_1.default>);
exports.default = SvgEdgeFill;
