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
const SvgJewelryLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M9 2.9c0-.463.319-.865.769-.973 1.396-.33 3.065-.326 4.462 0 .446.106.77.515.77.973v2.138a.75.75 0 0 0 .431.679l5.694 2.668a1.5 1.5 0 0 1 .728 1.982l-4.473 9.785A1.45 1.45 0 0 1 16.06 21H7.94a1.45 1.45 0 0 1-1.32-.848l-4.474-9.785a1.5 1.5 0 0 1 .728-1.982l5.694-2.668A.75.75 0 0 0 9 5.037zm2 .88v1.258a2.75 2.75 0 0 1-1.583 2.49l-.98.46C9.141 9.888 10.57 11 12 11s2.859-1.11 3.565-3.013l-.981-.46A2.75 2.75 0 0 1 13 5.038V3.78c-.263-.019-.596-.033-1-.033-.403 0-.736.014-1 .033m.32 9.174c-2.153-.296-3.845-1.976-4.697-4.117L4.172 9.985 8.292 19h7.416l4.121-9.015-2.451-1.148c-.852 2.142-2.544 3.82-4.696 4.117l1.507 2.11a.75.75 0 0 1 0 .872l-1.985 2.78a.25.25 0 0 1-.407 0l-1.985-2.78a.75.75 0 0 1 0-.872z"/>
  </react_native_svg_1.default>);
exports.default = SvgJewelryLine;
