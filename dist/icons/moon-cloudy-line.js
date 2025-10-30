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
const SvgMoonCloudyLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M8.67 5.007a7 7 0 0 1 7.55-3.901 4.5 4.5 0 0 0 5.674 5.674 7.04 7.04 0 0 1-.759 4.593A5.5 5.5 0 0 1 17.5 21H9a8 8 0 0 1-.33-15.993m2.177.207a8.02 8.02 0 0 1 5.61 4.885 5.53 5.53 0 0 1 2.96.245 5 5 0 0 0 .488-1.37 6.5 6.5 0 0 1-5.878-5.88 5 5 0 0 0-3.18 2.12M17.5 19a3.5 3.5 0 1 0-2.5-5.95V13a6 6 0 1 0-6 6z"/>
  </react_native_svg_1.default>);
exports.default = SvgMoonCloudyLine;
