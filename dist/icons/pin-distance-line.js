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
const SvgPinDistanceLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45zM7.5 14.278 3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 12.45 2.475-2.475a3.5 3.5 0 1 0-4.95 0zm3.89-1.06-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
  </react_native_svg_1.default>);
exports.default = SvgPinDistanceLine;
