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
const SvgChessLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M15.5.287q-1.037.43-2 .987C8.419 4.215 5 9.708 5 16H4v4H3v2h17v-2h-1v-4h-1.192a5.4 5.4 0 0 0-.76-1.85c-.566-.858-1.421-1.562-2.658-2.131q-.196-.09-.396-.172a.174.174 0 0 1-.059-.282c.055-.055.122-.053.192-.04l1.753.351 2.413.483a1 1 0 0 0 1.065-.485l1.295-2.266a1 1 0 0 0-.105-1.142L15.5 2.5zM17 20H6v-2h11zM7 16c0-5.22 2.668-9.822 6.719-12.509l4.85 5.732-.59 1.033-3.497-.7a2.17 2.17 0 0 0-1.96.594c-1.133 1.133-.676 2.977.713 3.547 1.246.513 1.859 1.082 2.2 1.642.118.193.22.41.303.661zm7-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  </react_native_svg_1.default>);
exports.default = SvgChessLine;
