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
const SvgDnaFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M18 1c0 .716-.064 1.38-.184 2H8.232c.639 2.552 2.562 4.229 5.35 6.428-.505.437-1.036.866-1.582 1.299C8.73 8.135 6 5.668 6 1H4c0 5.466 3.21 8.464 6.386 11C7.21 14.537 4 17.534 4 23h2c0-4.96 3.08-7.434 6.618-10.214l.092-.072C16.149 10.012 20 6.987 20 1zm-.184 20H8.232c.659-2.634 2.687-4.335 5.622-6.64.443-.35.888-.697 1.327-1.051C17.766 15.599 20 18.44 20 23h-2q-.002-1.071-.184-2"/>
  </react_native_svg_1.default>);
exports.default = SvgDnaFill;
