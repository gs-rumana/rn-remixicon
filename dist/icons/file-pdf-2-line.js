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
const SvgFilePdf2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M5 4h10v4h4v12H5zM3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zm6.5 5.5c0 1.577-.455 3.437-1.224 5.153-.772 1.723-1.814 3.197-2.9 4.066l1.18 1.613c2.927-1.952 6.168-3.29 9.304-2.842l.457-1.939C14.644 12.661 12.5 9.99 12.5 7.5zm.6 5.972c.268-.597.505-1.216.705-1.843a9.7 9.7 0 0 0 1.706 1.966c-.982.176-1.944.465-2.875.833q.248-.471.465-.956"/>
  </react_native_svg_1.default>);
exports.default = SvgFilePdf2Line;
