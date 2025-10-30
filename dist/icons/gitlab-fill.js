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
const SvgGitlabFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m21.663 9.987-.028-.072-2.719-7.094a.71.71 0 0 0-.706-.449.711.711 0 0 0-.654.522L15.72 8.52H8.282L6.443 2.895a.71.71 0 0 0-.652-.524.72.72 0 0 0-.707.45L2.362 9.925l-.028.07a5.06 5.06 0 0 0 1.674 5.838l.01.007.024.019 4.147 3.104 2.05 1.553 1.247.944a.84.84 0 0 0 1.016 0l1.247-.944 2.05-1.553 4.172-3.123.01-.008a5.055 5.055 0 0 0 1.682-5.845"/>
  </react_native_svg_1.default>);
exports.default = SvgGitlabFill;
