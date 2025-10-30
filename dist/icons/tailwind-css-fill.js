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
const SvgTailwindCssFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 4.86q-4.76 0-5.95 4.76 1.785-2.38 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12q4.76 0 5.95-4.76-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12Q1.29 12 .1 16.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14q4.76 0 5.95-4.76-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12"/>
  </react_native_svg_1.default>);
exports.default = SvgTailwindCssFill;
