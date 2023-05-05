import fetch from "node-fetch";
import {
	AnimuGIFOptions,
	AnimuGIFResult,
	AnimuQuoteResult
} from "../typings/Animu";

const baseURL = "https://some-random-api.com";

/**
 * Get an anime GIF
 * @returns gif url
 */
async function gif({ type, }: AnimuGIFOptions): Promise<AnimuGIFResult> 
{
	return fetch(`${baseURL}/animu/${type}`)
		.then(res => res.json())
		.then((json) => 
		{
			return {
				imgURL: json.link,
			} as AnimuGIFResult;
		});
}

/**
 * Get an anime quote
 * @returns quote, character and anime
 */
async function quote(): Promise<AnimuQuoteResult> 
{
	return fetch(`${baseURL}/animu/quote`)
		.then(res => res.json())
		.then((json) => 
		{
			return json as AnimuQuoteResult;
		});
}

export { gif, quote };
