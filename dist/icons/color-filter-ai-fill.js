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
const SvgColorFilterAiFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 25 24" {...props}>
    <react_native_svg_1.Path d="M15.511 7.3q.578.25 1.152.506-.043.113-.091.221a7 7 0 0 0-5.102 2.945 5 5 0 1 1 4.217-8.35C14.705 3.053 14 3.897 14 5c0 .994.601 1.904 1.511 2.3m-2.357 10.646a7 7 0 0 0 0-5.89 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.947 5 5 0 1 1-5.1-2.946m10.602-4.313-.565-.246a.506.506 0 0 1 0-.934l.565-.246a4.36 4.36 0 0 0 2.251-2.22l.338-.759a.53.53 0 0 1 .963 0l.32.717a4.37 4.37 0 0 0 2.326 2.251l.61.253a.506.506 0 0 1 0 .942l-.61.253a4.37 4.37 0 0 0-2.327 2.25l-.319.718a.53.53 0 0 1-.963 0l-.338-.76a4.36 4.36 0 0 0-2.25-2.219"/>
  </react_native_svg_1.default>);
exports.default = SvgColorFilterAiFill;
