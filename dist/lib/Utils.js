"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexColor = exports.isImageAndGif = void 0;
function isImageAndGif(url) {
    return url.match(/^http[^\?]*.(jpg|jpeg|png|gif)(\?(.*))?$/gim) != null;
}
exports.isImageAndGif = isImageAndGif;
function isHexColor(hexColor) {
    return hexColor.match(/^[0-9a-f]{3,6}$/i) !== null;
}
exports.isHexColor = isHexColor;
