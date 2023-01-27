export type CanvasMiscOogwayQuoteType = "1" | "2";
export type CanvasMiscTweetTheme = "light" | "dark";

export interface CanvasResult {
	/**
	 * image url
	 */
	imgUrl: string;
}

export interface CanvasMiscRGBToHexResult {
	/**
	 * hexadecimal color code
	 */
	hex: string;
}

export interface CanvasMiscHexToRGBResult {
	/**
	 * red value
	 */
	red: number;

	/**
	 * green value
	 */
	green: number;

	/**
	 * blue value
	 */
	blue: number;
}
export interface CanvasBaseOptions {
	/**
	 * image url
	 */
	imgUrl: string;
}

export interface CanvasHexOptions {
	/**
	 * hexadecimal color code
	 */
	hexColor: string;
}

export interface CanvasRGBOptions {
	/**
	 * red value
	 */
	red: number;

	/**
	 * green value
	 */
	green: number;

	/**
	 * blue value
	 */
	blue: number;
}

export interface CanvasFilterBrightenOptions extends CanvasBaseOptions {
	/**
	 * image brightness level
	 */
	brightnessLevel: number;
}

export interface CanvasFilterTintOptions
	extends CanvasBaseOptions,
		CanvasHexOptions {}

export interface CanvasFilterThresholdOptions extends CanvasBaseOptions {
	/**
	 * threshold
	 */
	threshold: number;
}

export interface CanvasMiscLiedOptions extends CanvasBaseOptions {
	/**
	 * username
	 */
	username: string;
}

export interface CanvasMiscGenshinNamecardOptions extends CanvasBaseOptions {
	/**
	 * birthday in DD/MM format
	 */
	birthday: string;

	/**
	 * username on the namecard
	 */
	username: string;

	/**
	 * description on the namecard
	 */
	description?: string;
}

export interface CanvasMiscNoBitchesOptions {
	/**
	 * no {item}
	 */
	item: string;
}

export interface CanvasMiscOogwayQuoteOptions {
	/**
	 * oogway quote type
	 */
	type: CanvasMiscOogwayQuoteType;

	/**
	 * quote
	 */
	quote: string;
}

export interface CanvasMiscTweetOptions extends CanvasBaseOptions {
	/**
	 * tweet display name
	 */
	displayName: string;

	/**
	 * tweet username
	 */
	username: string;

	/**
	 * tweet replies count
	 */
	repliesCount?: number;

	/**
	 * tweet retweets count
	 */
	retweetsCount?: number;

	/**
	 * tweet likes count
	 */
	likesCount?: number;

	/**
	 * tweet color theme
	 */
	theme?: CanvasMiscTweetTheme;
}

export interface CanvasMiscYouTubeCommentOptions extends CanvasBaseOptions {
	/**
	 * comment username
	 */
	username: string;

	/**
	 * comment content
	 */
	comment: string;
}
