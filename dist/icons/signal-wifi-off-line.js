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
const SvgSignalWifiOffLine = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808zm.772 5.999L12 17.817l1.967-2.437-8.835-8.836q-.799.38-1.552.848M12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693-1.422-1.422 3.938-4.876A15.9 15.9 0 0 0 12 5q-1.31 0-2.579.207L7.725 3.51C9.095 3.177 10.527 3 12.001 3"/>
  </react_native_svg_1.default>);
exports.default = SvgSignalWifiOffLine;
