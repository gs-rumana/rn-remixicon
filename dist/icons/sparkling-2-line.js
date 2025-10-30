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
const SvgSparkling2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m17 1.208 1.32 2.473L20.792 5 18.32 6.319 17 8.792l-1.318-2.473-2.473-1.32 2.473-1.318zm-6.333 8.125 5 2.667-5 2.667-2.666 5-2.667-5-5-2.667 5-2.667 2.667-5zm.75 2.667L9.19 10.812 8.001 8.583l-1.189 2.229L4.584 12l2.228 1.188 1.189 2.229 1.188-2.229zm8.25 4.333-1.666-3.125-1.667 3.125L13.209 18l3.125 1.667 1.667 3.125 1.666-3.125L22.792 18z"/>
  </react_native_svg_1.default>);
exports.default = SvgSparkling2Line;
