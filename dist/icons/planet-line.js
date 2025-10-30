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
const SvgPlanetLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M3.918 8.037A9 9 0 0 0 15.966 20.08c.873.373 1.719.618 2.49.681.902.074 1.844-.095 2.526-.777.752-.752.88-1.816.746-2.812-.123-.91-.48-1.92-1.002-2.961A9 9 0 0 0 9.791 3.274c-1.044-.524-2.055-.882-2.965-1.006-.997-.135-2.062-.007-2.815.746-.682.683-.851 1.626-.777 2.528.064.773.31 1.62.684 2.495m1.404-2.071a4 4 0 0 1-.095-.587c-.048-.586.09-.842.198-.95.12-.12.423-.275 1.132-.179q.298.04.643.136a9 9 0 0 0-1.878 1.58m14.29 10.837a5 5 0 0 1 .134.637c.096.709-.06 1.012-.178 1.13-.109.109-.364.247-.95.199a4 4 0 0 1-.581-.094 9 9 0 0 0 1.575-1.872m-3.73 1.023c-1.677-.878-3.625-2.323-5.507-4.205-1.88-1.88-3.324-3.825-4.203-5.5A7.02 7.02 0 0 1 9.97 5.298a7 7 0 0 1 5.912 12.528m-2.277.99a7 7 0 0 1-8.42-8.419c.964 1.516 2.25 3.112 3.776 4.638 1.528 1.528 3.126 2.815 4.644 3.78"/>
  </react_native_svg_1.default>);
exports.default = SvgPlanetLine;
