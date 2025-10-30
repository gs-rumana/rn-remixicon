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
const SvgHand = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12.5 2a.5.5 0 0 0-.5.5V12h-2V4.5a.5.5 0 0 0-1 0V14H7c-.38-1.62-1.358-2.56-2.405-2.678.284.744.766 1.937 1.571 3.778.86 1.962 1.725 3.422 2.838 4.399C10.078 20.442 11.459 21 13.5 21a5.5 5.5 0 0 0 5.5-5.5V7a.5.5 0 0 0-1 0v5h-2V4a.5.5 0 0 0-1 0v8h-2V2.5a.5.5 0 0 0-.5-.5M21 15.5a7.5 7.5 0 0 1-7.5 7.5c-2.458 0-4.328-.692-5.816-1.998-1.45-1.274-2.459-3.064-3.35-5.1-.93-2.127-1.444-3.422-1.724-4.178-.357-.964.136-2.312 1.476-2.406a4.02 4.02 0 0 1 2.914.94V4.5a2.5 2.5 0 0 1 3.04-2.442 2.5 2.5 0 0 1 4.79-.467A2.502 2.502 0 0 1 18 4v.55q.243-.05.5-.05A2.5 2.5 0 0 1 21 7z"/>
  </react_native_svg_1.default>);
exports.default = SvgHand;
