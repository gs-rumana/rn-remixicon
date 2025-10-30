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
const SvgCoreosLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9.454 4.414a8 8 0 1 0 10.202 9.91q-5.1 2.189-11.545 1.565Q7.044 9.702 9.454 4.414M11.902 4a16.8 16.8 0 0 0-1.541 3.768 5.98 5.98 0 0 1 4.114 1.756 5.98 5.98 0 0 1 1.745 3.861q1.994-.513 3.78-1.433A7.994 7.994 0 0 0 11.902 4M4.93 19.07c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0 3.905 10.237 0 14.142-10.237 3.905-14.142 0m5.02-9.293a18 18 0 0 0-.076 4.229 23 23 0 0 0 4.36-.219 3.99 3.99 0 0 0-1.172-2.849 4 4 0 0 0-3.112-1.161"/>
  </react_native_svg_1.default>);
exports.default = SvgCoreosLine;
