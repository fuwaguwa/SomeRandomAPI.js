"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lyrics = exports.joke = exports.define = exports.generateToken = exports.binary = exports.base64 = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const baseUrl = "https://some-random-api.com/others/";
/**
 * Encode/decode a string in base64
 * @returns encoded/decoded string
 */
async function base64({ mode, string, }) {
    string = string.split(" ").join("%20");
    return (0, node_fetch_1.default)(`${baseUrl}/base64?${mode}=${string}`)
        .then(res => res.json())
        .then((json) => {
        if (mode === "encode")
            return { string: json.base64, };
        return { string: json.text, };
    });
}
exports.base64 = base64;
/**
 * Encode/decode a string in binary
 * @returns encoded/decoded string
 */
async function binary({ mode, string, }) {
    string = string.split(" ").join("%20");
    return (0, node_fetch_1.default)(`${baseUrl}/binary?${mode}=${string}`)
        .then(res => res.json())
        .then((json) => {
        if (mode === "encode")
            return { string: json.binary, };
        return { string: json.text, };
    });
}
exports.binary = binary;
/**
 * Generate a fake discord token
 * @returns token
 */
async function generateToken({ id, }) {
    return (0, node_fetch_1.default)(`${baseUrl}/bottoken?id=${id || ""}`)
        .then(res => res.json())
        .then((json) => {
        return json;
    });
}
exports.generateToken = generateToken;
/**
 * Define a word
 * @returns word definition | error
 */
async function define({ word, }) {
    return (0, node_fetch_1.default)(`${baseUrl}/dictionary?word=${word}`)
        .then(res => res.json())
        .then((json) => {
        if (!json.word)
            return null;
        return json;
    });
}
exports.define = define;
/**
 * Tell you a joke
 * @returns a joke
 */
async function joke() {
    return (0, node_fetch_1.default)(`${baseUrl}/joke`)
        .then(res => res.json())
        .then((json) => {
        return json;
    });
}
exports.joke = joke;
/**
 * Get a song lyrics
 * @returns song info + lyrics | null
 */
async function lyrics({ title, }) {
    return (0, node_fetch_1.default)(`${baseUrl}/lyrics?title=${title}`)
        .then(res => res.json())
        .then((json) => {
        if (!json.title)
            return null;
        return json;
    });
}
exports.lyrics = lyrics;
