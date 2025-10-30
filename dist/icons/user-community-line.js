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
const SvgUserCommunityLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M5.234 7.73A8 8 0 0 1 12 4a8 8 0 0 1 6.767 3.73l1.69-1.07A10 10 0 0 0 12 2a10 10 0 0 0-8.456 4.66zM12 20a8 8 0 0 1-6.766-3.73l-1.69 1.07A10 10 0 0 0 12 22a10 10 0 0 0 8.457-4.66l-1.69-1.07A8 8 0 0 1 12 20m0-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2m-9-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m20 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>
  </react_native_svg_1.default>);
exports.default = SvgUserCommunityLine;
