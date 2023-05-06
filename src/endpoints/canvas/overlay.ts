import { CanvasBaseOptions, CanvasResult } from "../../typings/Canvas";
import { isImageAndGif } from "../../lib/Utils";

const baseUrl = "https://some-random-api.com/canvas/overlay";

/**
 * Overlays USSR flags over image
 * @returns comrade image url
 */
function comrade({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/comrade?avatar=${imgUrl}`,
	};
}

/**
 * Overlays the gay flag over image
 * @returns gay image url
 */
function gay({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/gay?avatar=${imgUrl}`,
	};
}

/**
 * Overlays a glass over the image
 * @returns glass image url
 */
function glass({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/glass?avatar=${imgUrl}`,
	};
}

/**
 * Overlays prison bars over image
 * @returns jail image url
 */
function jail({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/jail?avatar=${imgUrl}`,
	};
}

/**
 * Overlays GTA mission passed over image
 * @returns passed image url
 */
function passed({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/passed?avatar=${imgUrl}`,
	};
}

/**
 * Overlays triggered over image
 * @returns triggered image url
 */
function triggered({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/triggered?avatar=${imgUrl}`,
	};
}

/**
 * Overlays wasted over image
 * @returns wasted image url
 */
function wasted({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/wasted?avatar=${imgUrl}`,
	};
}

export { comrade, gay, glass, jail, passed, wasted, triggered };
