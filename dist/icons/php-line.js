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
const SvgPhpLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m10.15 5.55-1.717 8.834h2l.858-4.417h1.5c.553 0 .915.44.81.982l-.668 3.435h2l.668-3.435c.316-1.627-.771-2.945-2.428-2.945h-1.5l.477-2.454zM2.173 8.004h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.075 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75zm13.859-4.417h3.75c1.795 0 2.972 1.428 2.63 3.19s-2.076 3.19-3.87 3.19h-1.75l-.477 2.455h-2zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75z"/>
  </react_native_svg_1.default>);
exports.default = SvgPhpLine;
