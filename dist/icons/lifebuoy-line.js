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
const SvgLifebuoyLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 15a5 5 0 0 1-1.828-.344l-2.236 2.236A7.96 7.96 0 0 0 12 20a7.96 7.96 0 0 0 4.064-1.108l-2.236-2.236A5 5 0 0 1 12 17m-8-5c0 1.484.404 2.873 1.108 4.064l2.237-2.236A5 5 0 0 1 7 12c0-.645.122-1.261.345-1.828L5.108 7.936A7.96 7.96 0 0 0 4 12m14.892-4.064-2.236 2.236c.222.567.344 1.183.344 1.828s-.122 1.261-.344 1.828l2.236 2.236A7.96 7.96 0 0 0 20 12a7.96 7.96 0 0 0-1.108-4.064M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0-5a7.96 7.96 0 0 0-4.064 1.108l2.236 2.237A5 5 0 0 1 12 7c.645 0 1.261.122 1.828.345l2.236-2.237A7.96 7.96 0 0 0 12 4"/>
  </react_native_svg_1.default>);
exports.default = SvgLifebuoyLine;
