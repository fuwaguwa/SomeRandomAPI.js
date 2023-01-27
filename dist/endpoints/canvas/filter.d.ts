import { CanvasBaseOptions, CanvasFilterBrightenOptions, CanvasFilterThresholdOptions, CanvasFilterTintOptions, CanvasResult } from "../../typings/Canvas";
/**
 * Blueify an image
 * @returns blueified image url
 */
declare function blueify({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Blurplify an image
 * @returns blurpified image url
 */
declare function blurplify({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Blurpify an image using Discord's blurple
 * @returns blurpified image url
 */
declare function discordBlurpify({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Change the brightness on an image
 * @returns brightened image url
 */
declare function brighten({ imgUrl, brightnessLevel, }: CanvasFilterBrightenOptions): CanvasResult;
/**
 * Tint a color over an image
 * @returns tinted image url
 */
declare function tint({ imgUrl, hexColor, }: CanvasFilterTintOptions): CanvasResult;
/**
 * Turns your image green
 * @returns greenified image url
 */
declare function greenify({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Greyscale an image
 * @returns greyscaled image url
 */
declare function greyscale({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Invert and greyscal an image
 * @returns inverted and greyscaled image url
 */
declare function invertGreyscale({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Redify an image
 * @returns redified image url
 */
declare function redify({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Apply sepia filter to image
 * @returns sepia image url
 */
declare function sepia({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Threshold an image
 * @returns thresholded image url
 */
declare function threshold({ imgUrl, threshold, }: CanvasFilterThresholdOptions): CanvasResult;
export { blueify, blurplify, discordBlurpify, brighten, tint, greenify, greyscale, invertGreyscale, redify, sepia, threshold };
