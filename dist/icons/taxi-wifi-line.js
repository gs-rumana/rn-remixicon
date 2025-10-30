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
const SvgTaxiWifiLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 3v4H6.236l-2.001 4H22v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.447-4.894A2 2 0 0 1 6.237 5H9V3zm8 10H4v5h16zM6.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1-13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.32 3.32 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.65 4.65 0 0 0 18.5 3.5"/>
  </react_native_svg_1.default>);
exports.default = SvgTaxiWifiLine;
