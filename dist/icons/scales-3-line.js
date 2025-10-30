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
const SvgScales3Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m12.999 2-.001 1.278 5 1.668 3.633-1.21.632 1.896-3.031 1.011 3.095 8.512A5.98 5.98 0 0 1 17.998 17a5.98 5.98 0 0 1-4.328-1.845l3.094-8.512-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.98 5.98 0 0 1 6 17a5.98 5.98 0 0 1-4.33-1.845l3.095-8.512-3.03-1.01.632-1.898L6 4.945l4.999-1.667V2zm5 7.103-1.959 5.386c.588.331 1.258.511 1.959.511.7 0 1.37-.18 1.958-.51zm-12 0L4.04 14.489c.588.331 1.258.511 1.959.511.7 0 1.37-.18 1.958-.51z"/>
  </react_native_svg_1.default>);
exports.default = SvgScales3Line;
