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
const SvgGlasses2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M3.015 10.988c.03-1.535.11-2.52.34-3.667.331-1.658.954-2.659 2.2-3.489l-1.11-1.664c-1.755 1.17-2.633 2.669-3.051 4.76-.52 2.6-.398 7.936-.395 8.07V15a5 5 0 1 0 9.935-.806c.33-.125.69-.194 1.065-.194.376 0 .734.069 1.065.194a5 5 0 1 0 9.935.806s.132-5.439-.394-8.071c-.419-2.092-1.296-3.591-3.05-4.761l-1.11 1.664c1.245.83 1.867 1.831 2.199 3.49.229 1.145.31 2.131.34 3.666A4.98 4.98 0 0 0 17.998 10a5 5 0 0 0-4.224 2.325A5 5 0 0 0 11.999 12a5 5 0 0 0-1.775.325A5 5 0 0 0 5.999 10a4.98 4.98 0 0 0-2.984.988M3 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0m12.168-.994A3.002 3.002 0 0 1 21 15a3 3 0 1 1-5.832-.994"/>
  </react_native_svg_1.default>);
exports.default = SvgGlasses2Line;
