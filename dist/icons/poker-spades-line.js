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
const SvgPokerSpadesLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 15.916a2 2 0 0 0-2.8-1.295A3.9 3.9 0 0 1 7.5 15C5.383 15 4 13.482 4 12c0-1.06.515-2.115 1.613-3.29 1.133-1.212 2.655-2.311 4.285-3.486.693-.5 1.421-1.024 2.102-1.567.68.543 1.409 1.067 2.102 1.567 1.63 1.175 3.152 2.274 4.285 3.486C19.485 9.885 20 10.94 20 12c0 1.482-1.383 3-3.5 3a3.9 3.9 0 0 1-1.7-.379 2 2 0 0 0-2.8 1.295M12 1c-.871.871-2.08 1.742-3.356 2.662C5.524 5.911 2 8.452 2 12c0 2.761 2.462 5 5.5 5 .927 0 1.8-.208 2.566-.576a9.6 9.6 0 0 1-.536 2.317c-.22.604-.491 1.188-.802 1.813A.997.997 0 0 0 9.618 22h4.764c.743 0 1.22-.78.89-1.446-.31-.625-.582-1.209-.802-1.813a9.6 9.6 0 0 1-.536-2.317A5.9 5.9 0 0 0 16.5 17c3.038 0 5.5-2.239 5.5-5 0-3.548-3.525-6.09-6.644-8.338C14.08 2.742 12.871 1.872 12 1m0 16.074c.158 1.11.451 2.047.815 2.926h-1.63c.364-.879.657-1.816.815-2.926"/>
  </react_native_svg_1.default>);
exports.default = SvgPokerSpadesLine;
