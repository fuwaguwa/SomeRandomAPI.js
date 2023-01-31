"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threshold = exports.invert = exports.sepia = exports.redify = exports.invertGreyscale = exports.greyscale = exports.greenify = exports.tint = exports.brighten = exports.discordBlurpify = exports.blurplify = exports.blueify = void 0;
const Utils_1 = require("../../lib/Utils");
const baseUrl = "https://some-random-api.ml/canvas/filter";
/**
 * Blueify an image
 * @returns blueified image url
 */
function blueify({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/blue?avatar=${imgUrl}`,
    };
}
exports.blueify = blueify;
/**
 * Blurplify an image
 * @returns blurpified image url
 */
function blurplify({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/blurple?avatar=${imgUrl}`,
    };
}
exports.blurplify = blurplify;
/**
 * Blurpify an image using Discord's blurple
 * @returns blurpified image url
 */
function discordBlurpify({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/blurple2?avatar=${imgUrl}`,
    };
}
exports.discordBlurpify = discordBlurpify;
/**
 * Change the brightness on an image
 * @returns brightened image url
 */
function brighten({ imgUrl, brightnessLevel, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    if (brightnessLevel < 0)
        brightnessLevel = 0;
    else if (brightnessLevel > 100)
        brightnessLevel = 100;
    return {
        imgUrl: `${baseUrl}/brightness?avatar=${imgUrl}&brightness=${brightnessLevel}`,
    };
}
exports.brighten = brighten;
/**
 * Tint a color over an image
 * @returns tinted image url
 */
function tint({ imgUrl, hexColor, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    if (!(0, Utils_1.isHexColor)(hexColor))
        throw new Error("You must use hex color! Remove the \"#\" if you have any!");
    return {
        imgUrl: `${baseUrl}/color?avatar=${imgUrl}&color=${hexColor}`,
    };
}
exports.tint = tint;
/**
 * Turns your image green
 * @returns greenified image url
 */
function greenify({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/green?avatar=${imgUrl}`,
    };
}
exports.greenify = greenify;
/**
 * Greyscale an image
 * @returns greyscaled image url
 */
function greyscale({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/greyscale?avatar=${imgUrl}`,
    };
}
exports.greyscale = greyscale;
/**
 * Invert an image
 * @returns inverted image url
 */
function invert({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/invert?avatar=${imgUrl}`,
    };
}
exports.invert = invert;
/**
 * Invert and greyscal an image
 * @returns inverted and greyscaled image url
 */
function invertGreyscale({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/invertgreyscale?avatar=${imgUrl}`,
    };
}
exports.invertGreyscale = invertGreyscale;
/**
 * Redify an image
 * @returns redified image url
 */
function redify({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/red?avatar=${imgUrl}`,
    };
}
exports.redify = redify;
/**
 * Apply sepia filter to image
 * @returns sepia image url
 */
function sepia({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/sepia?avatar=${imgUrl}`,
    };
}
exports.sepia = sepia;
/**
 * Threshold an image
 * @returns thresholded image url
 */
function threshold({ imgUrl, threshold, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    if (threshold < 0)
        threshold = 0;
    else if (threshold > 100)
        threshold = 100;
    return {
        imgUrl: `${baseUrl}/threshold?avatar=${imgUrl}&threshold=${threshold}`,
    };
}
exports.threshold = threshold;
