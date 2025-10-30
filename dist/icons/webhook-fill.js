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
const SvgWebhookFill = (props) => (<react_native_svg_1.default xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <react_native_svg_1.Path d="M13.501 4.399a3 3 0 0 1 1.382 3.436l1.92.56A5.002 5.002 0 0 0 7.67 4.498a5 5 0 0 0 1.014 6.243L6.803 14H6.8a2 2 0 1 0 1.946 1.537c-.082-.347-.102-.725.076-1.034l2.545-4.408-.866-.5a3 3 0 0 1 3-5.196m1.53 13.681a3.001 3.001 0 0 0 4.765-3.576 3 3 0 0 0-4.098-1.098l-.866.5-2.546-4.41c-.178-.308-.515-.48-.857-.582a2.003 2.003 0 0 1-1.16-2.917 2 2 0 0 1 3.464 2L13.731 8l1.883 3.26a5.002 5.002 0 0 1 4.084 9.074 5 5 0 0 1-6.112-.872zM3.8 16c0-1.409.973-2.594 2.285-2.914l-.475-1.943A5.002 5.002 0 0 0 6.8 21a5 5 0 0 0 4.9-4h3.764l.002.004a2 2 0 1 0 .358-2.454c-.26.245-.577.45-.934.45H9.8v1a3 3 0 1 1-6 0"/>
  </react_native_svg_1.default>);
exports.default = SvgWebhookFill;
