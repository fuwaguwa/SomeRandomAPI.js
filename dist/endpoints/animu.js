"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quote = exports.gif = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const baseURL = "https://some-random-api.ml";
/**
 * Get an anime GIF
 * @returns gif url
 */
async function gif({ type, }) {
    return (0, node_fetch_1.default)(`${baseURL}/animu/${type}`)
        .then(res => res.json())
        .then((json) => {
        return {
            imgURL: json.link,
        };
    });
}
exports.gif = gif;
/**
 * Get an anime quote
 * @returns quote, character and anime
 */
async function quote() {
    return (0, node_fetch_1.default)(`${baseURL}/animu/quote`)
        .then(res => res.json())
        .then((json) => {
        return json;
    });
}
exports.quote = quote;
