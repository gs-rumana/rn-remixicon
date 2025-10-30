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
const SvgBloggerFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M19.822 9.729H18.73a1.113 1.113 0 0 1-1.093-1.094A5.636 5.636 0 0 0 12 3H8.636A5.636 5.636 0 0 0 3 8.635v6.73A5.636 5.636 0 0 0 8.636 21h6.729A5.636 5.636 0 0 0 21 15.364v-4.458a1.15 1.15 0 0 0-1.178-1.177M8.552 7.542h4.037c.589 0 1.093.504 1.093 1.093S13.178 9.73 12.59 9.73H8.55a1.113 1.113 0 0 1-1.093-1.094c0-.589.505-1.093 1.093-1.093m6.897 8.916H8.636a1.113 1.113 0 0 1-1.094-1.094c0-.589.505-1.093 1.094-1.093h6.813c.588 0 1.093.504 1.093 1.093s-.505 1.094-1.093 1.094"/>
  </react_native_svg_1.default>);
exports.default = SvgBloggerFill;
