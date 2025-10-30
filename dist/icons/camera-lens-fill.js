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
const SvgCameraLensFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9.827 21.763 14.31 14l3.532 6.118A9.96 9.96 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237M7.89 21.12A10.03 10.03 0 0 1 2.458 15h8.965zM2.05 13Q2 12.507 2 12c0-2.607.998-4.981 2.632-6.761L9.113 13zm4.109-9.117A9.96 9.96 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10zM16.11 2.88A10.03 10.03 0 0 1 21.542 9h-8.965zM21.95 11q.05.493.05 1a9.96 9.96 0 0 1-2.632 6.761L14.887 11z"/>
  </react_native_svg_1.default>);
exports.default = SvgCameraLensFill;
