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
const SvgXboxLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M4.798 15.485c1.124-2.52 3.2-5.44 4.487-6.962-1.248-1.246-2.162-1.931-2.818-2.3A7.98 7.98 0 0 0 4.001 12c0 1.25.286 2.432.797 3.485m4.051-10.84c1.6.406 3.152 1.314 3.152 1.314v-.005s1.552-.904 3.151-1.31A8 8 0 0 0 12.001 4c-1.12 0-2.185.23-3.152.645m8.686 1.578c-.655.37-1.568 1.055-2.816 2.3 1.287 1.523 3.362 4.441 4.486 6.961A8 8 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777m.408 11.134c-1.403-2.237-4.09-4.945-5.942-6.344-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.643M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10"/>
  </react_native_svg_1.default>);
exports.default = SvgXboxLine;
