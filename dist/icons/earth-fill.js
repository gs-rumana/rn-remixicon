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
const SvgEarthFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.004 10.878c-.345-.525-.594-.903-1.542-.753-1.79.284-1.989.597-2.074 1.113l-.024.156-.025.166c-.097.683-.094.941.22 1.27 1.265 1.328 2.023 2.285 2.253 2.845.112.273.4 1.1.202 1.918a8.2 8.2 0 0 0 3.151-2.237c.11-.374.19-.84.19-1.404v-.105c0-.922 0-1.343-.652-1.716a7 7 0 0 0-.645-.325c-.367-.167-.61-.276-.938-.756q-.06-.085-.116-.172M12 3.833c-2.317 0-4.41.966-5.896 2.516.177.123.331.296.437.534.204.457.204.928.204 1.345 0 .328 0 .64.105.865.144.308.766.44 1.315.554.197.042.399.084.583.135.506.14.898.595 1.211.96.13.151.323.374.42.43.05-.036.211-.211.29-.498.062-.22.044-.414-.045-.52-.56-.66-.529-1.93-.356-2.399.272-.739 1.122-.684 1.744-.644.232.015.45.03.614.009.622-.078.814-1.025.949-1.21.292-.4 1.186-1.003 1.74-1.375A8.1 8.1 0 0 0 12 3.833"/>
  </react_native_svg_1.default>);
exports.default = SvgEarthFill;
