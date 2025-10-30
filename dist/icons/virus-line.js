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
const SvgVirusLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m13.716 1.947 3.735 1.434-.717 1.867-.934-.359-.746 1.945a6 6 0 0 1 1.945 1.846l1.902-.847-.406-.914 1.827-.813 1.627 3.654-1.827.813-.407-.913-1.902.847a6 6 0 0 1 .07 2.68l1.944.746.358-.933 1.867.716-1.433 3.735-1.867-.717.357-.933-1.944-.747A6 6 0 0 1 15.32 17l.848 1.903.914-.407.813 1.827-3.654 1.627-.813-1.827.913-.407-.847-1.902a6 6 0 0 1-2.68.07l-.747 1.944.934.358-.717 1.867L6.55 20.62l.717-1.867.932.358.748-1.944A6 6 0 0 1 7 15.319l-1.903.848.407.914-1.827.813L2.05 14.24l1.827-.813.406.914 1.903-.848a6 6 0 0 1-.07-2.68l-1.945-.746-.358.933-1.867-.716 1.434-3.735 1.867.717-.36.933 1.946.747A6 6 0 0 1 8.68 7l-.848-1.903-.913.407-.814-1.827L9.76 2.051l.813 1.827-.914.407.848 1.902a6 6 0 0 1 2.68-.07l.745-1.945L13 3.815zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-.5 4.866a1 1 0 1 1-1 1.732 1 1 0 0 1 1-1.732M14 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-2.134-1.232a1 1 0 1 1-1.732 1 1 1 0 0 1 1.732-1"/>
  </react_native_svg_1.default>);
exports.default = SvgVirusLine;
