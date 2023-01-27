import { AnimuGIFOptions, AnimuGIFResult, AnimuQuoteResult } from "../typings/Animu";
/**
 * Get an anime GIF
 * @returns gif url
 */
declare function gif({ type, }: AnimuGIFOptions): Promise<AnimuGIFResult>;
/**
 * Get an anime quote
 * @returns quote, character and anime
 */
declare function quote(): Promise<AnimuQuoteResult>;
export { gif, quote };
