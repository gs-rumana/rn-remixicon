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
const SvgDiscountPercentLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M10.054 2.094a3 3 0 0 1 3.892 0l1.348 1.149a1 1 0 0 0 .57.236l1.765.14a3 3 0 0 1 2.752 2.752l.14 1.766a1 1 0 0 0 .236.569l1.149 1.348a3 3 0 0 1 0 3.892l-1.149 1.348a1 1 0 0 0-.236.569l-.14 1.765a3 3 0 0 1-2.752 2.752l-1.766.14a1 1 0 0 0-.569.237l-1.348 1.148a3 3 0 0 1-3.892 0l-1.348-1.148a1 1 0 0 0-.569-.236l-1.765-.141a3 3 0 0 1-2.752-2.752l-.14-1.765a1 1 0 0 0-.237-.57l-1.148-1.348a3 3 0 0 1 0-3.891l1.148-1.348a1 1 0 0 0 .236-.57l.141-1.765A3 3 0 0 1 6.372 3.62l1.765-.14a1 1 0 0 0 .57-.236zm2.595 1.522a1 1 0 0 0-1.297 0l-1.348 1.15a3 3 0 0 1-1.708.706l-1.765.141a1 1 0 0 0-.917.917l-.141 1.766a3 3 0 0 1-.707 1.707l-1.15 1.348a1 1 0 0 0 0 1.297l1.15 1.348a3 3 0 0 1 .707 1.707l.14 1.766a1 1 0 0 0 .918.917l1.765.141a3 3 0 0 1 1.708.707l1.348 1.15a1 1 0 0 0 1.297 0l1.348-1.15a3 3 0 0 1 1.707-.707l1.765-.14a1 1 0 0 0 .918-.918l.14-1.766c.05-.629.298-1.226.708-1.707l1.149-1.348a1 1 0 0 0 0-1.297l-1.15-1.348a3 3 0 0 1-.706-1.707l-.141-1.766a1 1 0 0 0-.918-.917l-1.765-.14a3 3 0 0 1-1.707-.708zm2.18 4.141 1.414 1.414-7.071 7.072-1.415-1.415zm-4.597 2.475a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.12"/>
  </react_native_svg_1.default>);
exports.default = SvgDiscountPercentLine;
