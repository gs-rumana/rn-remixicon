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
const SvgBoxingFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m9.501 11 .144.007a1.5 1.5 0 0 1 1.35 1.348L11 12.5l-.007.145a1.5 1.5 0 0 1-1.349 1.348L9.501 14h-3.5v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19.001 13c.711 0 1.388-.149 2-.416V17a3 3 0 0 1-2 2.829V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-1.17a3 3 0 0 1-2-2.83v-4a2 2 0 0 1 2-2zm12.5-3.5V8l-.005.176a3 3 0 0 1-2.819 2.819l-.176.005h-6.337A3.5 3.5 0 0 0 9.71 9.006L9.5 9h-4.5c-.729 0-1.412.195-2.001.536L3.001 6a4 4 0 0 1 4-4h9.5a5.5 5.5 0 0 1 5.5 5.5"/>
  </react_native_svg_1.default>);
exports.default = SvgBoxingFill;
