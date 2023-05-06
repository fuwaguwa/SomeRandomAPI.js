import fetch from "node-fetch";
import {
	OthersBotTokenOptions,
	OthersBotTokenResult,
	OthersDictionaryOptions,
	OthersDictionaryResults,
	OthersJokeResult,
	OthersLyricsOptions,
	OthersLyricsResults,
	OthersTextEncodingSchemeOptions,
	OthersTextEncodingSchemeResult
} from "../typings/Others";

const baseUrl = "https://some-random-api.com/others/";

/**
 * Encode/decode a string in base64
 * @returns encoded/decoded string
 */
async function base64({
	mode,
	string,
}: OthersTextEncodingSchemeOptions): Promise<OthersTextEncodingSchemeResult> 
{
	string = string.split(" ").join("%20");

	return fetch(`${baseUrl}/base64?${mode}=${string}`)
		.then(res => res.json())
		.then((json) => 
		{
			if (mode === "encode") return { string: json.base64, };
			return { string: json.text, };
		});
}

/**
 * Encode/decode a string in binary
 * @returns encoded/decoded string
 */
async function binary({
	mode,
	string,
}: OthersTextEncodingSchemeOptions): Promise<OthersTextEncodingSchemeResult> 
{
	string = string.split(" ").join("%20");

	return fetch(`${baseUrl}/binary?${mode}=${string}`)
		.then(res => res.json())
		.then((json) => 
		{
			if (mode === "encode") return { string: json.binary, };
			return { string: json.text, };
		});
}

/**
 * Generate a fake discord token
 * @returns token
 */
async function generateToken({
	id,
}: OthersBotTokenOptions): Promise<OthersBotTokenResult> 
{
	return fetch(`${baseUrl}/bottoken?id=${id || ""}`)
		.then(res => res.json())
		.then((json: OthersBotTokenResult) => 
		{
			return json;
		});
}

/**
 * Define a word
 * @returns word definition | error
 */
async function define({
	word,
}: OthersDictionaryOptions): Promise<OthersDictionaryResults | null> 
{
	return fetch(`${baseUrl}/dictionary?word=${word}`)
		.then(res => res.json())
		.then((json) => 
		{
			if (!json.word) return null;
			return json;
		});
}

/**
 * Tell you a joke
 * @returns a joke
 */
async function joke(): Promise<OthersJokeResult> 
{
	return fetch(`${baseUrl}/joke`)
		.then(res => res.json())
		.then((json) => 
		{
			return json;
		});
}

/**
 * Get a song lyrics
 * @returns song info + lyrics | null
 */
async function lyrics({
	title,
}: OthersLyricsOptions): Promise<OthersLyricsResults | null> 
{
	return fetch(`${baseUrl}/lyrics?title=${title}`)
		.then(res => res.json())
		.then((json) => 
		{
			if (!json.title) return null;
			return json;
		});
}

export { base64, binary, generateToken, define, joke, lyrics };
