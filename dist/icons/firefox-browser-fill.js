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
const SvgFirefoxBrowserFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M21.283 8.26c-.436-1.047-1.317-2.178-2.01-2.535.48.939.893 2.003 1.017 3.057-1.133-2.823-3.054-3.962-4.622-6.44a8 8 0 0 1-.545-1.013c-2.228 1.305-3.151 3.589-3.388 5.042a5.3 5.3 0 0 0-1.985.507.26.26 0 0 0-.127.318.254.254 0 0 0 .341.147A4.9 4.9 0 0 1 12 6.879c1.805-.013 3.518.99 4.416 2.558-.535-.375-1.493-.746-2.415-.586 3.602 1.801 2.635 8.004-2.357 7.77-2.014-.083-3.945-1.65-4.126-3.73 0 0 .462-1.723 3.31-1.723.309 0 1.189-.86 1.205-1.109-.004-.081-1.747-.775-2.426-1.444-.302-.298-.594-.618-.948-.856a4.64 4.64 0 0 1-.028-2.448c-1.03.469-1.834 1.21-2.416 1.863-.397-.503-.37-2.162-.347-2.508-.873.465-1.642 1.274-2.248 2.137-1.029 1.458-1.622 3.37-1.622 5.182C1.997 17.515 6.468 22 12 22c4.954 0 9.081-3.597 9.887-8.32.241-1.823.107-3.71-.604-5.42"/>
  </react_native_svg_1.default>);
exports.default = SvgFirefoxBrowserFill;
