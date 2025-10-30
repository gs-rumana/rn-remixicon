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
const SvgPokerSpadesFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M10.951 15.893A5.83 5.83 0 0 1 7.5 17C4.462 17 2 14.761 2 12c0-3.548 3.525-6.089 6.644-8.338C9.92 2.742 11.129 1.872 12 1c.871.871 2.08 1.742 3.356 2.662C18.476 5.911 22 8.452 22 12c0 2.761-2.462 5-5.5 5a5.83 5.83 0 0 1-3.451-1.107c.284 1.646 1.009 2.82 1.794 4.092l.369.602c.384.636-.087 1.413-.83 1.413H9.618c-.743 0-1.214-.777-.83-1.413l.369-.602c.785-1.272 1.51-2.446 1.794-4.092"/>
  </react_native_svg_1.default>);
exports.default = SvgPokerSpadesFill;
