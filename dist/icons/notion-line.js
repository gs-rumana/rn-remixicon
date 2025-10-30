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
const SvgNotionLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M16.285 2.955a1.9 1.9 0 0 0-1.211-.31l-11.06.961a.99.99 0 0 0-.903.986v11.575c0 .408.133.806.378 1.133l2.767 3.69c.203.27.53.418.867.392l12.853-.989a.99.99 0 0 0 .913-.986V6.527a.94.94 0 0 0-.418-.781zm-1.057 1.46a.1.1 0 0 1 .071.02l2.746 1.83-10.207.816-1.86-1.86zm3.883 14.262-10.722.825V8.82l10.722-.858zM4.89 6.646l1.722 1.722V18.5l-1.7-2.267a.1.1 0 0 1-.022-.066zm7.09 3.477-1.977.13v7.562l1.996-.13v-4.337l3.512 4.169 1.976-.13V9.825l-1.996.13v4.337z"/>
  </react_native_svg_1.default>);
exports.default = SvgNotionLine;
