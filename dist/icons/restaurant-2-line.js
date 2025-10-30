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
const SvgRestaurant2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m14.268 12.147-.853.853 7.07 7.071-1.413 1.414L12 14.415l-7.072 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.621-5.156 1.953-1.953 4.644-2.428 6.01-1.061 1.368 1.367.893 4.058-1.06 6.01-1.602 1.602-3.7 2.21-5.157 1.622M4.222 3.807l6.718 6.718-2.829 2.829-3.889-3.89a4 4 0 0 1 0-5.656m13.789 5.304c1.257-1.257 1.516-2.726 1.06-3.182s-1.924-.196-3.181 1.06c-1.258 1.258-1.517 2.727-1.061 3.183s1.925.196 3.182-1.06"/>
  </react_native_svg_1.default>);
exports.default = SvgRestaurant2Line;
