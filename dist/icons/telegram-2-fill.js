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
const SvgTelegram2Fill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M2.148 11.81q7.87-3.429 10.497-4.522c4.999-2.079 6.037-2.44 6.714-2.452.15-.003.482.034.698.21.182.147.232.347.256.487s.054.459.03.708c-.27 2.847-1.443 9.754-2.04 12.942-.252 1.348-.748 1.8-1.23 1.845-1.045.096-1.838-.69-2.85-1.354-1.585-1.039-2.48-1.686-4.018-2.699-1.777-1.171-.625-1.815.388-2.867.265-.275 4.87-4.464 4.96-4.844.01-.048.021-.225-.084-.318-.105-.094-.26-.062-.373-.036q-.239.054-7.592 5.018-1.079.74-1.952.721c-.643-.014-1.88-.363-2.798-.662-1.128-.367-2.024-.56-1.946-1.183q.061-.486 1.34-.994"/>
  </react_native_svg_1.default>);
exports.default = SvgTelegram2Fill;
