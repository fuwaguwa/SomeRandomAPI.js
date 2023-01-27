export type AnimuGIF = "face-palm" | "hug" | "pat" | "wink";

export interface AnimuGIFResult {
	/**
	 * GIF url
	 */
	imgURL: string;
}

export interface AnimuQuoteResult {
	/**
	 * The quote
	 */
	sentence: string;

	/**
	 * character who said the quote
	 */
	character: string;

	/**
	 * anime the quote is from
	 */
	anime: string;
}

export interface AnimuGIFOptions {
	/**
	 * GIF type
	 */
	type: AnimuGIF;
}
