"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggered = exports.wasted = exports.passed = exports.jail = exports.glass = exports.gay = exports.comrade = void 0;
const Utils_1 = require("../../lib/Utils");
const baseUrl = "https://some-random-api.ml/canvas/overlay";
/**
 * Overlays USSR flags over image
 * @returns comrade image url
 */
function comrade({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/comrade?avatar=${imgUrl}`,
    };
}
exports.comrade = comrade;
/**
 * Overlays the gay flag over image
 * @returns gay image url
 */
function gay({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/gay?avatar=${imgUrl}`,
    };
}
exports.gay = gay;
/**
 * Overlays a glass over the image
 * @returns glass image url
 */
function glass({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/glass?avatar=${imgUrl}`,
    };
}
exports.glass = glass;
/**
 * Overlays prison bars over image
 * @returns jail image url
 */
function jail({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/jail?avatar=${imgUrl}`,
    };
}
exports.jail = jail;
/**
 * Overlays GTA mission passed over image
 * @returns passed image url
 */
function passed({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/passed?avatar=${imgUrl}`,
    };
}
exports.passed = passed;
/**
 * Overlays triggered over image
 * @returns triggered image url
 */
function triggered({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/triggered?avatar=${imgUrl}`,
    };
}
exports.triggered = triggered;
/**
 * Overlays wasted over image
 * @returns wasted image url
 */
function wasted({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/wasted?avatar=${imgUrl}`,
    };
}
exports.wasted = wasted;
