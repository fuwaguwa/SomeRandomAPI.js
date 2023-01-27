import { CanvasMiscHexToRGBResult, CanvasMiscRGBToHexResult, CanvasResult, CanvasBaseOptions, CanvasHexOptions, CanvasRGBOptions, CanvasMiscLiedOptions, CanvasMiscGenshinNamecardOptions, CanvasMiscOogwayQuoteOptions, CanvasMiscNoBitchesOptions, CanvasMiscTweetOptions, CanvasMiscYouTubeCommentOptions } from "../../typings/Canvas";
/**
 * Add a bisexual border to the image
 * @returns bisexual image url
 */
declare function bisexual({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Add a pansexual border to your image
 * @returns pansexual image url
 */
declare function pansexual({ imgUrl, }: CanvasBaseOptions): {
    imgUrl: string;
};
/**
 * Add a lesbian border to the image
 * @returns lesbian image url
 */
declare function lesbian({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Add a LGBT border to the image
 * @returns lgbt image url
 */
declare function lgbt({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Add a nonbinary border to an image
 * @returns nonbinary image url
 */
declare function nonbinary({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Add a transgender border to an image
 * @returns transgender image url
 */
declare function transgender({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Blur an image
 * @returns blurred image url
 */
declare function blur({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Crop an image into a circle
 * @returns cropped image url
 */
declare function circleCrop({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Crop an image into a heart
 * @returns cropped image url
 */
declare function heartCrop({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Visualize a hexadecimal color code
 * @returns blurred image url
 */
declare function viewColor({ hexColor, }: CanvasHexOptions): CanvasResult;
/**
 * Convert RGB color code to hex color code
 * @returns hexadecimal color code
 */
declare function convertRGBToHex({ red, green, blue, }: CanvasRGBOptions): Promise<CanvasMiscRGBToHexResult>;
/**
 * Put an image on the horny card
 * @returns card image url
 */
declare function hornyCard({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Oh no, it's stupid
 * @returns stupid image url
 */
declare function itsStupid({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Experience the JPEG artifacts
 * @returns blurred image url
 */
declare function jpg({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * {username} lied as naturally as she breathed (endpoint currently broken)
 * @returns null
 */
declare function lied({ imgUrl, username, }: CanvasMiscLiedOptions): CanvasResult | null;
/**
 * Turn someone into a anti-lolicon police
 * @returns lolice image url
 */
declare function lolice({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Generate a genshin namecard
 * @returns namecard image url
 */
declare function genshinNamecard({ imgUrl, birthday, username, description, }: CanvasMiscGenshinNamecardOptions): CanvasResult;
/**
 * No {item}?
 * @returns no {item} image url
 */
declare function noBitches({ item, }: CanvasMiscNoBitchesOptions): CanvasResult;
/**
 * Generate a Master Oogway quote
 * @returns oogway quote image url
 */
declare function oogwayQuote({ type, quote, }: CanvasMiscOogwayQuoteOptions): CanvasResult;
/**
 * Pixelate an image
 * @returns pixelated image url
 */
declare function pixelate({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Convert hexadecimal color code to RGB color code
 * @returns rgb color code
 */
declare function convertHexToRGB({ hexColor, }: CanvasHexOptions): Promise<CanvasMiscHexToRGBResult>;
/**
 * The simp card
 * @returns simp card image url
 */
declare function simpCard({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Spin (endpoint currently broken)
 * @returns null
 */
declare function spin({ imgUrl, }: CanvasBaseOptions): CanvasResult | null;
/**
 * Put an image over the DVD in Tonikawa
 * @returns DVD image url
 */
declare function tonikawaDVD({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Generate a picture of a tweet
 * @returns tweet image url
 */
declare function tweet({ displayName, username, imgUrl, repliesCount, retweetsCount, likesCount, theme, }: CanvasMiscTweetOptions): CanvasResult;
/**
 * Generate an image of a youtube commentt
 * @returns comment image url
 */
declare function youtubeComment({ username, imgUrl, comment, }: CanvasMiscYouTubeCommentOptions): CanvasResult;
export { bisexual, blur, circleCrop, heartCrop, viewColor, convertRGBToHex, hornyCard, itsStupid, jpg, lesbian, lgbt, lied, lolice, genshinNamecard, noBitches, nonbinary, oogwayQuote, pansexual, pixelate, convertHexToRGB, simpCard, spin, tonikawaDVD, transgender, tweet, youtubeComment };
