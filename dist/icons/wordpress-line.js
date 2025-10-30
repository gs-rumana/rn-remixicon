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
const SvgWordpressLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.394 7.566-2.155-5.985-2.181 6.232a8.03 8.03 0 0 0 4.336-.247m2.468-1.38A7.98 7.98 0 0 0 20 12a8 8 0 0 0-.545-2.908c-.25 1.454-.692 3.35-.976 4.315zm-.201-12.531A7.97 7.97 0 0 0 12 4a7.99 7.99 0 0 0-6.245 3h1.39v2h-.75l2.755 7.958 2.227-6.362L10.802 9H8.645V7h5v2h-.717l2.621 7.282 1.012-3.44c.523-1.832.092-2.631-.339-3.429-.289-.534-.577-1.068-.577-1.913a2 2 0 0 1 1.228-1.845M4.425 9.42A8 8 0 0 0 4 12a8 8 0 0 0 3.64 6.708z"/>
  </react_native_svg_1.default>);
exports.default = SvgWordpressLine;
