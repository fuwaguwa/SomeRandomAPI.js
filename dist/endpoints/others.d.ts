import { OthersBotTokenOptions, OthersBotTokenResult, OthersDictionaryOptions, OthersDictionaryResults, OthersJokeResult, OthersLyricsOptions, OthersLyricsResults, OthersTextEncodingSchemeOptions, OthersTextEncodingSchemeResult } from "../typings/Others";
/**
 * Encode/decode a string in base64
 * @returns encoded/decoded string
 */
declare function base64({ mode, string, }: OthersTextEncodingSchemeOptions): Promise<OthersTextEncodingSchemeResult>;
/**
 * Encode/decode a string in binary
 * @returns encoded/decoded string
 */
declare function binary({ mode, string, }: OthersTextEncodingSchemeOptions): Promise<OthersTextEncodingSchemeResult>;
/**
 * Generate a fake discord token
 * @returns token
 */
declare function generateToken({ id, }: OthersBotTokenOptions): Promise<OthersBotTokenResult>;
/**
 * Define a word
 * @returns word definition | error
 */
declare function define({ word, }: OthersDictionaryOptions): Promise<OthersDictionaryResults | null>;
/**
 * Tell you a joke
 * @returns a joke
 */
declare function joke(): Promise<OthersJokeResult>;
/**
 * Get a song lyrics
 * @returns song info + lyrics | null
 */
declare function lyrics({ title, }: OthersLyricsOptions): Promise<OthersLyricsResults | null>;
export { base64, binary, generateToken, define, joke, lyrics };
