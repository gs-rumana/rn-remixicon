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
const SvgFediverseLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M11 11.5V8.232L8.17 9.866l-1-1.732L10 6.5 7.17 4.866l1-1.732L11 4.768V1.5h2v3.268l2.83-1.634 1 1.732L14 6.5l2.83 1.634-1 1.732L13 8.232V11.5zm10.46 1.384-2.83 1.634V11.25h-2v3.268l-2.83-1.634-1 1.732 2.83 1.634-2.83 1.634 1 1.732 2.83-1.634v3.268h2v-3.268l2.83 1.634 1-1.732-2.83-1.634 2.83-1.634zM7.37 17.982v3.268h-2v-3.268l-2.83 1.634-1-1.732 2.83-1.634-2.83-1.634 1-1.732 2.83 1.633V11.25h2v3.268l2.83-1.635 1 1.733-2.83 1.634 2.83 1.634-1 1.732z"/>
  </react_native_svg_1.default>);
exports.default = SvgFediverseLine;
