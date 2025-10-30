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
const SvgBnbFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M6.167 4.367 12 1l5.833 3.367-2.144 1.244L12 3.488 8.312 5.61zm11.666 4.246-2.144-1.244L12 9.492 8.312 7.37 6.167 8.613V11.1l3.689 2.123v4.246L12 18.714l2.145-1.244v-4.246l3.688-2.123zm0 6.734v-2.488l-2.144 1.244v2.487zm1.523.879-3.689 2.123v2.487L21.5 17.47v-6.734l-2.145 1.244zM17.21 6.49l2.145 1.244v2.487L21.5 8.977V6.49l-2.145-1.244zM9.856 19.25v2.487L12 22.981l2.145-1.244v-2.488L12 20.493zm-3.689-3.903 2.145 1.243v-2.487l-2.145-1.244zM9.856 6.49 12 7.734l2.145-1.244L12 5.246zM4.644 7.734 6.79 6.49 4.644 5.246 2.5 6.49v2.487l2.144 1.244zm0 4.246L2.5 10.736v6.733l5.833 3.367V18.35l-3.689-2.123z"/>
  </react_native_svg_1.default>);
exports.default = SvgBnbFill;
