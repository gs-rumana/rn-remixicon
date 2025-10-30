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
const SvgGhost2Fill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896Q14.094 22 12 22t-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6m0 10c-.828 0-1.5 1.12-1.5 2.5S11.172 17 12 17s1.5-1.12 1.5-2.5S12.828 12 12 12M9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
  </react_native_svg_1.default>);
exports.default = SvgGhost2Fill;
