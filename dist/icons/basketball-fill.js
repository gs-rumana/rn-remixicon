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
const SvgBasketballFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12.366 13.366 1.775 1.025a9.98 9.98 0 0 0-.311 7.44A10 10 0 0 1 12 22a10 10 0 0 1-4.11-.88zm3.518 2.032 4.233 2.444a10.03 10.03 0 0 1-4.363 3.43 8 8 0 0 1 .008-5.57zm-7.025-4.056 1.775 1.024-4.476 7.75a10.03 10.03 0 0 1-3.59-4.785 9.98 9.98 0 0 0 6.085-3.713zm13.046-.726Q22 11.297 22 12a10 10 0 0 1-.88 4.11l-4.236-2.445a7.99 7.99 0 0 1 4.866-3.021zM2.881 7.892l4.235 2.445a8 8 0 0 1-5.021 3.05A10 10 0 0 1 2 12c0-1.465.315-2.856.88-4.11m14.961-4.008a10.03 10.03 0 0 1 3.59 4.785 9.98 9.98 0 0 0-6.086 3.715l-.205.276-1.775-1.025zM12 2c1.465 0 2.856.315 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A10 10 0 0 1 12 2m-3.753.73a8 8 0 0 1-.01 5.57l-.12.303-4.234-2.445a10.04 10.04 0 0 1 4.164-3.346z"/>
  </react_native_svg_1.default>);
exports.default = SvgBasketballFill;
