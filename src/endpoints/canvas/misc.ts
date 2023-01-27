import { isHexColor, isImageAndGif } from "../../lib/Utils";
import {
	CanvasMiscHexToRGBResult,
	CanvasMiscRGBToHexResult,
	CanvasResult,
	CanvasBaseOptions,
	CanvasHexOptions,
	CanvasRGBOptions,
	CanvasMiscLiedOptions,
	CanvasMiscGenshinNamecardOptions,
	CanvasMiscOogwayQuoteOptions,
	CanvasMiscNoBitchesOptions,
	CanvasMiscTweetOptions,
	CanvasMiscYouTubeCommentOptions
} from "../../typings/Canvas";
import fetch from "node-fetch";

const baseUrl = "https://some-random-api.ml/canvas/misc";

/**
 * Add a bisexual border to the image
 * @returns bisexual image url
 */
function bisexual({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/bisexual?avatar=${imgUrl}`,
	};
}

/**
 * Add a pansexual border to your image
 * @returns pansexual image url
 */
function pansexual({ imgUrl, }: CanvasBaseOptions) 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/pansexual?avatar=${imgUrl}`,
	};
}

/**
 * Add a lesbian border to the image
 * @returns lesbian image url
 */
function lesbian({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/lesbian?avatar=${imgUrl}`,
	};
}

/**
 * Add a LGBT border to the image
 * @returns lgbt image url
 */
function lgbt({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/lgbt?avatar=${imgUrl}`,
	};
}

/**
 * Add a nonbinary border to an image
 * @returns nonbinary image url
 */
function nonbinary({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/nonbinary?avatar=${imgUrl}`,
	};
}

/**
 * Add a transgender border to an image
 * @returns transgender image url
 */
function transgender({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/transgender?avatar=${imgUrl}`,
	};
}

/**
 * Blur an image
 * @returns blurred image url
 */
function blur({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/blur?avatar=${imgUrl}`,
	};
}

/**
 * Crop an image into a circle
 * @returns cropped image url
 */
function circleCrop({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/circle?avatar=${imgUrl}`,
	};
}

/**
 * Crop an image into a heart
 * @returns cropped image url
 */
function heartCrop({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/heart?avatar=${imgUrl}`,
	};
}

/**
 * Visualize a hexadecimal color code
 * @returns blurred image url
 */
function viewColor({ hexColor, }: CanvasHexOptions): CanvasResult 
{
	if (!isHexColor(hexColor))
		throw new Error("You must use hex color! Remove the \"#\" if you have any!");

	return {
		imgUrl: `${baseUrl}/colorviewer?hex=${hexColor}`,
	};
}

/**
 * Convert RGB color code to hex color code
 * @returns hexadecimal color code
 */
async function convertRGBToHex({
	red,
	green,
	blue,
}: CanvasRGBOptions): Promise<CanvasMiscRGBToHexResult> 
{
	if (red > 255) red = 255;
	else if (red < 0) red = 0;

	if (green > 255) green = 255;
	else if (green < 0) green = 0;

	if (blue > 255) blue = 255;
	else if (blue < 0) blue = 0;

	return fetch(`${baseUrl}/hex?rgb=${red},${green},${blue}`)
		.then(res => res.json())
		.then((json) => 
		{
			return json as CanvasMiscRGBToHexResult;
		});
}

/**
 * Put an image on the horny card
 * @returns card image url
 */
function hornyCard({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/horny?avatar=${imgUrl}`,
	};
}

/**
 * Oh no, it's stupid
 * @returns stupid image url
 */
function itsStupid({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/its-so-stupid?avatar=${imgUrl}`,
	};
}

/**
 * Experience the JPEG artifacts
 * @returns blurred image url
 */
function jpg({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/jpg?avatar=${imgUrl}`,
	};
}

/**
 * {username} lied as naturally as she breathed (endpoint currently broken)
 * @returns null
 */
function lied({
	imgUrl,
	username,
}: CanvasMiscLiedOptions): CanvasResult | null 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL mus be a direct link to a JPG/PNG/GIF image!");

	return null;

	// return {
	// 	imgUrl: `${baseUrl}/lied?avatar=${imgUrl}&username=${username}`
	// }
}

/**
 * Turn someone into a anti-lolicon police
 * @returns lolice image url
 */
function lolice({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/lolice?avatar=${imgUrl}`,
	};
}

/**
 * Generate a genshin namecard
 * @returns namecard image url
 */
function genshinNamecard({
	imgUrl,
	birthday,
	username,
	description,
}: CanvasMiscGenshinNamecardOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	if (
		birthday.match(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])$/i) == null
	)
		throw new Error("Birthday must be in the DD/MM format!");

	username = username.split(" ").join("%20");
	description = description ? description.split(" ").join("%20") : "";

	return {
		imgUrl: `${baseUrl}/namecard?avatar=${imgUrl}&birthday=${birthday}&username=${username}&description=${description}`,
	};
}

/**
 * No {item}?
 * @returns no {item} image url
 */
function noBitches({ item, }: CanvasMiscNoBitchesOptions): CanvasResult 
{
	return {
		imgUrl: `${baseUrl}/nobitches?no=no%20${item.split(" ").join("%20")}`,
	};
}

/**
 * Generate a Master Oogway quote
 * @returns oogway quote image url
 */
function oogwayQuote({
	type,
	quote,
}: CanvasMiscOogwayQuoteOptions): CanvasResult 
{
	let endpoint = "oogway";
	if (type === "2") endpoint += "2";

	return {
		imgUrl: `${baseUrl}/${endpoint}?quote=${quote.split(" ").join("%20")}`,
	};
}

/**
 * Pixelate an image
 * @returns pixelated image url
 */
function pixelate({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/pixelate?avatar=${imgUrl}`,
	};
}

/**
 * Convert hexadecimal color code to RGB color code
 * @returns rgb color code
 */
async function convertHexToRGB({
	hexColor,
}: CanvasHexOptions): Promise<CanvasMiscHexToRGBResult> 
{
	if (!isHexColor(hexColor))
		throw new Error("You must use hex color! Remove the \"#\" if you have any!");

	return fetch(`${baseUrl}/rgb?hex=${hexColor}`)
		.then(res => res.json())
		.then((json) => 
		{
			return {
				red: json.r,
				green: json.g,
				blue: json.b,
			};
		});
}

/**
 * The simp card
 * @returns simp card image url
 */
function simpCard({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/simpcard?avatar=${imgUrl}`,
	};
}

/**
 * Spin (endpoint currently broken)
 * @returns null
 */
function spin({ imgUrl, }: CanvasBaseOptions): CanvasResult | null 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return null;

	// return {
	// 	imgUrl: `${baseUrl}/spin?avatar=${imgUrl}`,
	// };
}

/**
 * Put an image over the DVD in Tonikawa
 * @returns DVD image url
 */
function tonikawaDVD({ imgUrl, }: CanvasBaseOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	return {
		imgUrl: `${baseUrl}/tonikawa?avatar=${imgUrl}`,
	};
}

/**
 * Generate a picture of a tweet
 * @returns tweet image url
 */
function tweet({
	displayName,
	username,
	imgUrl,
	repliesCount,
	retweetsCount,
	likesCount,
	theme = "light",
}: CanvasMiscTweetOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	displayName = displayName.split(" ").join("%20");
	username = username.split(" ").join("%20");

	return {
		imgUrl: `${baseUrl}/tweet?displayName=${displayName}&username=${username}&avatar=${imgUrl}&replies=${
			repliesCount || ""
		}&retweets=${retweetsCount || ""}&likes=${likesCount || ""}&theme=${theme}`,
	};
}

/**
 * Generate an image of a youtube commentt
 * @returns comment image url
 */
function youtubeComment({
	username,
	imgUrl,
	comment,
}: CanvasMiscYouTubeCommentOptions): CanvasResult 
{
	if (!isImageAndGif(imgUrl))
		throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");

	username = username.split(" ").join("%20");
	comment = comment.split(" ").join("%20");

	return {
		imgUrl: `${baseUrl}/comment?username=${username}&avatar=${imgUrl}&comment=${comment}`,
	};
}

export {
	bisexual,
	blur,
	circleCrop,
	heartCrop,
	viewColor,
	convertRGBToHex,
	hornyCard,
	itsStupid,
	jpg,
	lesbian,
	lgbt,
	lied,
	lolice,
	genshinNamecard,
	noBitches,
	nonbinary,
	oogwayQuote,
	pansexual,
	pixelate,
	convertHexToRGB,
	simpCard,
	spin,
	tonikawaDVD,
	transgender,
	tweet,
	youtubeComment
};
