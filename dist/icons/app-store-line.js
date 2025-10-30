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
const SvgAppStoreLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16M8.823 15.343l-.79 1.37a.823.823 0 1 1-1.428-.822l.589-1.016q.989-.307 1.629.468M13.21 8.66l2.423 4.194h2.141c.456 0 .823.367.823.822a.82.82 0 0 1-.823.823h-1.19l.803 1.391a.824.824 0 0 1-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787m.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 0 1-.822-.823.82.82 0 0 1 .822-.822h2.097l2.685-4.653-.838-1.456a.824.824 0 0 1 1.427-.823l.359.633.367-.633a.823.823 0 0 1 1.125-.302"/>
  </react_native_svg_1.default>);
exports.default = SvgAppStoreLine;
