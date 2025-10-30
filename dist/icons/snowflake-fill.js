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
const SvgSnowflakeFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12 3.298 2.445-1.63 1.11 1.664L13 5.035v5.233L17.53 7.65l.198-3.064 1.996.13-.19 2.932 2.635 1.303-.886 1.792-2.753-1.36L14.001 12l4.53 2.616 2.753-1.36.886 1.792-2.634 1.303.19 2.932-1.997.129-.197-3.064L13 13.732v5.233l2.555 1.703-1.11 1.664L12 20.702l-2.446 1.63-1.109-1.664L11 18.965v-5.233l-4.532 2.616-.198 3.064-1.996-.128.19-2.933-2.635-1.303.887-1.793 2.752 1.361L10 12 5.468 9.383l-2.752 1.361-.887-1.793L4.464 7.65l-.19-2.933 1.997-.129.197 3.064L11 10.267V5.035L8.445 3.332l1.11-1.664z"/>
  </react_native_svg_1.default>);
exports.default = SvgSnowflakeFill;
