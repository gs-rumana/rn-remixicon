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
const SvgSofaLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9 3a6 6 0 0 0-6 6v.351c-1.52.746-2.367 2.565-1.733 4.307l.312.86a7 7 0 0 1 .422 2.391V19.5A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-2.59a7 7 0 0 1 .421-2.393l.313-.86c.633-1.741-.213-3.56-1.734-4.306V9a6 6 0 0 0-6-6zm10 6.032c-1.694.23-3 1.682-3 3.44V14H8v-1.528a3.47 3.47 0 0 0-3-3.44V9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM16 16v1h2v-4.528a1.472 1.472 0 1 1 2.855.502l-.312.86A9 9 0 0 0 20 16.909V19H4v-2.09a9 9 0 0 0-.542-3.076l-.313-.86a1.471 1.471 0 1 1 2.855-.502V17h2v-1z"/>
  </react_native_svg_1.default>);
exports.default = SvgSofaLine;
