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
const SvgPrinterCloudLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v5.324a6 6 0 0 0-.61-.713A5.6 5.6 0 0 0 20 11.583V9H4v8h2v-1a1 1 0 0 1 1-1h5.194a5 5 0 0 0-.07.283q-.645.428-1.142 1.074-.24.312-.42.643H8v3h2.054a4.5 4.5 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2H8v3h8zm-8 6v2H5v-2zm13 6.5a3.5 3.5 0 1 0-7 0l.003.102a2.751 2.751 0 0 0 .58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 0 0 .58-5.392zm-4.993-.145a1.5 1.5 0 0 1 2.986 0L19 16.5v1.62q1.044.298 1.444.406A.75.75 0 0 1 20.255 20h-5.51a.75.75 0 0 1-.19-1.474q.357-.096 1.22-.342L16 18.12V16.5z"/>
  </react_native_svg_1.default>);
exports.default = SvgPrinterCloudLine;
