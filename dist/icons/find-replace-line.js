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
const SvgFindReplaceLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m18.033 16.618 4.28 4.282-1.413 1.414-4.282-4.281A8.96 8.96 0 0 1 11 20a9 9 0 0 1-8.065-5H9l-1.304 2.173A7 7 0 0 0 11 18a6.98 6.98 0 0 0 4.875-1.975l.15-.15A6.98 6.98 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.96 8.96 0 0 1-1.967 5.618M19.065 7H13l1.304-2.173A7 7 0 0 0 11 4c-3.867 0-7 3.133-7 7 0 .695.101 1.366.29 2H2.223A9 9 0 0 1 2 11c0-4.972 4.028-9 9-9a9 9 0 0 1 8.065 5"/>
  </react_native_svg_1.default>);
exports.default = SvgFindReplaceLine;
