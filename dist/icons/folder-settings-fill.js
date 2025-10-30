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
const SvgFolderSettingsFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zm-3.823 8.809-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.5 3.5 0 0 0 1.404-.811l.992.572.999-1.73-.991-.573a3.5 3.5 0 0 0 0-1.622l.991-.572-1-1.732-.992.573a3.5 3.5 0 0 0-1.404-.812V8.5h-1.999v1.144a3.5 3.5 0 0 0-1.404.812L8.6 9.883 7.6 11.615l.991.572a3.5 3.5 0 0 0 0 1.622m3.404.688a1.5 1.5 0 1 1 0-2.998 1.5 1.5 0 0 1 0 2.998"/>
  </react_native_svg_1.default>);
exports.default = SvgFolderSettingsFill;
