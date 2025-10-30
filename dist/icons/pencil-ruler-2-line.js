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
const SvgPencilRuler2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M7.05 14.121 4.93 16.243l2.828 2.828L19.071 7.757 16.243 4.93 14.12 7.05l1.415 1.414L14.12 9.88l-1.414-1.415-1.414 1.415 1.414 1.414-1.414 1.414-1.414-1.414-1.414 1.414 1.414 1.414-1.414 1.415zm9.9-11.313 4.243 4.242a1 1 0 0 1 0 1.414L8.465 21.192a1 1 0 0 1-1.415 0L2.808 16.95a1 1 0 0 1 0-1.414L15.536 2.808a1 1 0 0 1 1.414 0M14.12 18.363l1.415-1.414 2.242 2.243h1.414v-1.414l-2.242-2.243 1.414-1.414L21 16.756V21h-4.242zM5.636 9.878 2.808 7.05a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 0 1 1.414 0L9.88 5.635 8.464 7.05l-2.12-2.122-1.415 1.415 2.121 2.12z"/>
  </react_native_svg_1.default>);
exports.default = SvgPencilRuler2Line;
