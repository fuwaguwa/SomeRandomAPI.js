export type OthersTextEncodingSchemeMode = "encode" | "decode";
export interface OthersTextEncodingSchemeOptions {
    /**
     * encode/decode
     */
    mode: OthersTextEncodingSchemeMode;
    /**
     * string to encode/decode
     */
    string: string;
}
export interface OthersTextEncodingSchemeResult {
    /**
     * encoded/decoded string
     */
    string: string;
}
export interface OthersBotTokenOptions {
    /**
     * id to generate token with
     */
    id?: number;
}
export interface OthersBotTokenResult {
    /**
     * bot token
     */
    token: string;
}
export interface OthersDictionaryOptions {
    /**
     * word to be defined
     */
    word: string;
}
export interface OthersDictionaryResults {
    /**
     * word that is being defined
     */
    word: string;
    /**
     * definition of the word
     */
    definition: string;
}
export interface OthersJokeResult {
    /**
     * the joke
     */
    joke: string;
}
export interface OthersLyricsOptions {
    /**
     * song title
     */
    title: string;
}
export interface OthersLyricsResults {
    /**
     * song title
     */
    title: string;
    /**
     * song author
     */
    author: string;
    /**
     * song lyrics
     */
    lyrics: string;
    /**
     * song thumbnail
     */
    thumbnail: string[];
    /**
     * song link
     */
    link: string[];
}
