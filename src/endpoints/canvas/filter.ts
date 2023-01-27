import {
	CanvasBaseOptions,
	CanvasFilterBrightenOptions,
	CanvasFilterThresholdOptions,
	CanvasFilterTintOptions,
	CanvasResult
} from "../../typings/Canvas";
import { isHexColor, isImageAndGif } from "../../lib/Utils";

const baseUrl = "https://some-random-api.ml/canvas/filter";

/**
 * Blueify an image
 * @returns blueified image url
 */
function blueify({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/blue?avatar=${imgUrl}`,
	};
}

/**
 * Blurplify an image
 * @returns blurpified image url
 */
function blurplify({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/blurple?avatar=${imgUrl}`,
	};
}

/**
 * Blurpify an image using Discord's blurple
 * @returns blurpified image url
 */
function discordBlurpify({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/blurple2?avatar=${imgUrl}`,
	};
}

/**
 * Change the brightness on an image
 * @returns brightened image url
 */
function brighten({
	imgUrl,
	brightnessLevel,
}: CanvasFilterBrightenOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	if (brightnessLevel < 0) brightnessLevel = 0;
	else if (brightnessLevel > 100) brightnessLevel = 100;

	return {
		imgUrl: `${baseUrl}/brightness?avatar=${imgUrl}&brightness=${brightnessLevel}`,
	};
}

/**
 * Tint a color over an image
 * @returns tinted image url
 */
function tint({ imgUrl, hexColor, }: CanvasFilterTintOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	if (!isHexColor(hexColor))
		throw new Error("You must use hex color! Remove the \"#\" if you have any!");

	return {
		imgUrl: `${baseUrl}/color?avatar=${imgUrl}&color=${hexColor}`,
	};
}

/**
 * Turns your image green
 * @returns greenified image url
 */
function greenify({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/green?avatar=${imgUrl}`,
	};
}

/**
 * Greyscale an image
 * @returns greyscaled image url
 */
function greyscale({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/greyscale?avatar=${imgUrl}`,
	};
}

/**
 * Invert an image
 * @returns inverted image url
 */
function invert({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/invert?avatar=${imgUrl}`,
	};
}

/**
 * Invert and greyscal an image
 * @returns inverted and greyscaled image url
 */
function invertGreyscale({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/invertgreyscale?avatar=${imgUrl}`,
	};
}

/**
 * Redify an image
 * @returns redified image url
 */
function redify({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/red?avatar=${imgUrl}`,
	};
}

/**
 * Apply sepia filter to image
 * @returns sepia image url
 */
function sepia({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/sepia?avatar=${imgUrl}`,
	};
}

/**
 * Threshold an image
 * @returns thresholded image url
 */
function threshold({
	imgUrl,
	threshold,
}: CanvasFilterThresholdOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	if (threshold < 0) threshold = 0;
	else if (threshold > 100) threshold = 100;

	return {
		imgUrl: `${baseUrl}/threshold?avatar=${imgUrl}&threshold=${threshold}`,
	};
}

export {
	blueify,
	blurplify,
	discordBlurpify,
	brighten,
	tint,
	greenify,
	greyscale,
	invertGreyscale,
	redify,
	sepia,
	invert,
	threshold
};
