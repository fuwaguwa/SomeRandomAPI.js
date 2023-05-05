"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fact = exports.image = exports.imageAndFact = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const baseURL = "https://some-random-api.com";
/**
 * Get a random fact and image of an animal
 * @returns animal fact and image url
 */
async function imageAndFact({ animal, }) {
    return (0, node_fetch_1.default)(`${baseURL}/animal/${animal}`)
        .then(res => res.json())
        .then((json) => {
        return {
            imgUrl: json.image,
            fact: json.fact,
        };
    });
}
exports.imageAndFact = imageAndFact;
/**
 * Get a random image of an animal
 * @returns animal image url
 */
async function image({ animal, }) {
    return (0, node_fetch_1.default)(`${baseURL}/img/${animal}`)
        .then(res => res.json())
        .then((json) => {
        return {
            imgUrl: json.link,
        };
    });
}
exports.image = image;
/**
 * Get a random fact about an animal
 * @returns animal fact
 */
async function fact({ animal, }) {
    return (0, node_fetch_1.default)(`${baseURL}/facts/${animal}`)
        .then(res => res.json())
        .then((json) => {
        return json;
    });
}
exports.fact = fact;
