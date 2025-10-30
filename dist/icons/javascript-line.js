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
const SvgJavascriptLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m13.334 16.055-.858 1.188q1.221 1.089 3.036 1.089 1.386-.033 2.112-.715.737-.693.737-1.65 0-.935-.517-1.54t-1.738-.968q-1.01-.307-1.43-.561-.418-.264-.418-.638 0-.34.341-.55.342-.21.913-.209.419 0 .946.165.528.143.935.462l.77-1.199q-1.011-.814-2.684-.814-1.198 0-1.969.616-.792.615-.792 1.529.011.968.638 1.507.638.54 1.815.88.98.307 1.331.616a.97.97 0 0 1 .341.748.75.75 0 0 1-.34.66q-.353.242-1.013.242-1.077.01-2.156-.858m-5.53.638a2.2 2.2 0 0 1-.616-.583l-1.034.847q.463.78 1.144 1.089.638.285 1.463.286.45 0 .935-.143t.891-.484q.715-.572.748-1.87v-5.588H9.85v5.302q0 .76-.34 1.067-.342.297-.859.297-.495 0-.847-.22M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
  </react_native_svg_1.default>);
exports.default = SvgJavascriptLine;
