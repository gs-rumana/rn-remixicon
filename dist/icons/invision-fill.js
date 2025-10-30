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
const SvgInvisionFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2.988 11.065c-.06.267-.091.555-.091.79 0 .927.483 1.542 1.51 1.542.85 0 1.54-.526 2.037-1.375l-.303 1.267h1.69l.966-4.031c.242-1.02.71-1.55 1.419-1.55.558 0 .905.36.905.957 0 .173-.015.361-.075.565l-.498 1.853a3 3 0 0 0-.106.785c0 .88.498 1.523 1.54 1.523.89 0 1.6-.596 1.992-2.025l-.664-.267c-.332.958-.62 1.13-.846 1.13s-.347-.156-.347-.47c0-.141.03-.298.076-.487l.483-1.805c.12-.424.166-.8.166-1.145 0-1.35-.785-2.055-1.736-2.055-.89 0-1.796.835-2.248 1.715l.331-1.579h-2.58l-.362 1.39h1.207l-.744 3.098c-.584 1.35-1.656 1.372-1.79 1.34-.222-.051-.363-.139-.363-.437 0-.173.03-.42.106-.72l1.132-4.67H6.928l-.362 1.39h1.192zm1.637-5.44a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"/>
  </react_native_svg_1.default>);
exports.default = SvgInvisionFill;
