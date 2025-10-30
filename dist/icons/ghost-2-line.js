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
const SvgGhost2Line = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 0 0-.725.961v1.496A1.75 1.75 0 0 1 17.75 19h-.596a2 2 0 0 0-1.668.896Q14.094 22 12 22t-3.486-2.104A2 2 0 0 0 6.846 19H6.25a1.75 1.75 0 0 1-1.75-1.75v-1.496a1 1 0 0 0-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6m0 2C9.89 4 7.935 5.788 6.989 8.371l-.092.261-.316.95-.949.315c-1.255.419-2.067 1.341-2.424 2.56l-.023.086 1.14.327a3 3 0 0 1 2.17 2.703l.005.181V17h.346a4 4 0 0 1 3.2 1.6l.136.192C10.758 19.664 11.316 20 12 20c.638 0 1.167-.293 1.703-1.04l.115-.168a4 4 0 0 1 3.1-1.785l.236-.007h.346v-1.246a3 3 0 0 1 2.003-2.83l.173-.054 1.139-.327-.023-.087c-.337-1.151-1.08-2.037-2.22-2.484l-.204-.075-.95-.316-.315-.949C16.195 5.91 14.18 4 12 4m0 8c.828 0 1.5 1.12 1.5 2.5S12.828 17 12 17s-1.5-1.12-1.5-2.5.672-2.5 1.5-2.5M9.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>
  </react_native_svg_1.default>);
exports.default = SvgGhost2Line;
