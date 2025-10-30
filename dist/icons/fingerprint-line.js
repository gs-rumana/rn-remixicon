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
const SvgFingerprintLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M17 13v1c0 2.77-.664 5.445-1.915 7.846l-.227.42-1.746-.974c1.16-2.08 1.81-4.41 1.881-6.836L15 14v-1zm-6-3h2v4l-.005.379a12.94 12.94 0 0 1-2.691 7.549l-.231.29-1.549-1.264a10.94 10.94 0 0 0 2.47-6.588L11 14zm1-4a5 5 0 0 1 5 5h-2a3 3 0 0 0-6 0v3c0 2.235-.82 4.344-2.27 5.977l-.212.23-1.448-1.38a6.97 6.97 0 0 0 1.924-4.524L7 14v-3a5 5 0 0 1 5-5m0-4a9 9 0 0 1 9 9v3c0 1.698-.201 3.37-.596 4.99l-.14.539-1.93-.526c.392-1.437.614-2.922.658-4.435L19 14v-3A7 7 0 0 0 7.808 5.394L6.383 3.968A8.96 8.96 0 0 1 12 2M4.968 5.383l1.426 1.425a6.97 6.97 0 0 0-1.39 3.951L5 11 5.004 13c0 1.12-.264 2.203-.761 3.177l-.157.29-1.736-.992c.379-.665.6-1.407.645-2.183L3.004 13v-2a8.94 8.94 0 0 1 1.964-5.617"/>
  </react_native_svg_1.default>);
exports.default = SvgFingerprintLine;
