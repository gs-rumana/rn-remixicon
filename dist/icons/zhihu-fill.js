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
const SvgZhihuFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M13.374 18.897h1.452l.478 1.637 2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087-.315-1.084-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848.365-.04 1.573-.073 2.284-1.378.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764 1.27.363 2.536-.057 3.162-.614 0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466"/>
  </react_native_svg_1.default>);
exports.default = SvgZhihuFill;
