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
const SvgLifebuoyFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M7.197 14.682l-2.175 2.173a8.6 8.6 0 0 0 1.818 1.9l.305.223 2.173-2.175a5.5 5.5 0 0 1-1.98-1.883zm9.606 0a5.5 5.5 0 0 1-1.883 1.98l-.238.14 2.173 2.176a8.6 8.6 0 0 0 1.9-1.818l.223-.305zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M7.145 5.022a8.6 8.6 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.5 5.5 0 0 1 1.883-1.98l.238-.14zm9.71 0-2.173 2.175a5.5 5.5 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.6 8.6 0 0 0-1.818-1.9z"/>
  </react_native_svg_1.default>);
exports.default = SvgLifebuoyFill;
