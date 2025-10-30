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
const SvgBootstrapLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M1 11v2s2 0 2 4v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1c0 4-2 4-2 4m19.674 1q-.045.042-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2.308-.578-3.907-1.586-4.914L3.326 12q.045-.042.088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1c0 2.308.578 3.907 1.586 4.914zM8.5 7v10h5a3 3 0 0 0 1.615-5.529A3 3 0 0 0 12.5 7zm2 4V9h2a1 1 0 1 1 0 2zm0 2h3a1 1 0 1 1 0 2h-3z"/>
  </react_native_svg_1.default>);
exports.default = SvgBootstrapLine;
