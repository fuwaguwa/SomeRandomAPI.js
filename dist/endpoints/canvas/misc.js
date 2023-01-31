"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtubeComment = exports.tweet = exports.transgender = exports.tonikawaDVD = exports.spin = exports.simpCard = exports.convertHexToRGB = exports.pixelate = exports.pansexual = exports.oogwayQuote = exports.nonbinary = exports.noBitches = exports.genshinNamecard = exports.lolice = exports.lied = exports.lgbt = exports.lesbian = exports.jpg = exports.itsStupid = exports.hornyCard = exports.convertRGBToHex = exports.viewColor = exports.heartCrop = exports.circleCrop = exports.blur = exports.bisexual = void 0;
const tslib_1 = require("tslib");
const Utils_1 = require("../../lib/Utils");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const baseUrl = "https://some-random-api.ml/canvas/misc";
/**
 * Add a bisexual border to the image
 * @returns bisexual image url
 */
function bisexual({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/bisexual?avatar=${imgUrl}`,
    };
}
exports.bisexual = bisexual;
/**
 * Add a pansexual border to your image
 * @returns pansexual image url
 */
function pansexual({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/pansexual?avatar=${imgUrl}`,
    };
}
exports.pansexual = pansexual;
/**
 * Add a lesbian border to the image
 * @returns lesbian image url
 */
function lesbian({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/lesbian?avatar=${imgUrl}`,
    };
}
exports.lesbian = lesbian;
/**
 * Add a LGBT border to the image
 * @returns lgbt image url
 */
function lgbt({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/lgbt?avatar=${imgUrl}`,
    };
}
exports.lgbt = lgbt;
/**
 * Add a nonbinary border to an image
 * @returns nonbinary image url
 */
function nonbinary({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/nonbinary?avatar=${imgUrl}`,
    };
}
exports.nonbinary = nonbinary;
/**
 * Add a transgender border to an image
 * @returns transgender image url
 */
function transgender({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/transgender?avatar=${imgUrl}`,
    };
}
exports.transgender = transgender;
/**
 * Blur an image
 * @returns blurred image url
 */
function blur({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/blur?avatar=${imgUrl}`,
    };
}
exports.blur = blur;
/**
 * Crop an image into a circle
 * @returns cropped image url
 */
function circleCrop({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/circle?avatar=${imgUrl}`,
    };
}
exports.circleCrop = circleCrop;
/**
 * Crop an image into a heart
 * @returns cropped image url
 */
function heartCrop({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/heart?avatar=${imgUrl}`,
    };
}
exports.heartCrop = heartCrop;
/**
 * Visualize a hexadecimal color code
 * @returns blurred image url
 */
function viewColor({ hexColor, }) {
    if (!(0, Utils_1.isHexColor)(hexColor))
        throw new Error("You must use hex color! Remove the \"#\" if you have any!");
    return {
        imgUrl: `${baseUrl}/colorviewer?hex=${hexColor}`,
    };
}
exports.viewColor = viewColor;
/**
 * Convert RGB color code to hex color code
 * @returns hexadecimal color code
 */
async function convertRGBToHex({ red, green, blue, }) {
    if (red > 255)
        red = 255;
    else if (red < 0)
        red = 0;
    if (green > 255)
        green = 255;
    else if (green < 0)
        green = 0;
    if (blue > 255)
        blue = 255;
    else if (blue < 0)
        blue = 0;
    return (0, node_fetch_1.default)(`${baseUrl}/hex?rgb=${red},${green},${blue}`)
        .then(res => res.json())
        .then((json) => {
        return json;
    });
}
exports.convertRGBToHex = convertRGBToHex;
/**
 * Put an image on the horny card
 * @returns card image url
 */
function hornyCard({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/horny?avatar=${imgUrl}`,
    };
}
exports.hornyCard = hornyCard;
/**
 * Oh no, it's stupid
 * @returns stupid image url
 */
function itsStupid({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/its-so-stupid?avatar=${imgUrl}`,
    };
}
exports.itsStupid = itsStupid;
/**
 * Experience the JPEG artifacts
 * @returns blurred image url
 */
function jpg({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/jpg?avatar=${imgUrl}`,
    };
}
exports.jpg = jpg;
/**
 * {username} lied as naturally as she breathed (endpoint currently broken)
 * @returns null
 */
function lied({ imgUrl, username, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL mus be a direct link to a JPG/PNG/GIF image!");
    return null;
    // return {
    // 	imgUrl: `${baseUrl}/lied?avatar=${imgUrl}&username=${username}`
    // }
}
exports.lied = lied;
/**
 * Turn someone into a anti-lolicon police
 * @returns lolice image url
 */
function lolice({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/lolice?avatar=${imgUrl}`,
    };
}
exports.lolice = lolice;
/**
 * Generate a genshin namecard
 * @returns namecard image url
 */
function genshinNamecard({ imgUrl, birthday, username, description, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    if (birthday.match(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])$/i) == null)
        throw new Error("Birthday must be in the DD/MM format!");
    username = username.split(" ").join("%20");
    description = description ? description.split(" ").join("%20") : "";
    return {
        imgUrl: `${baseUrl}/namecard?avatar=${imgUrl}&birthday=${birthday}&username=${username}&description=${description}`,
    };
}
exports.genshinNamecard = genshinNamecard;
/**
 * No {item}?
 * @returns no {item} image url
 */
function noBitches({ item, }) {
    return {
        imgUrl: `${baseUrl}/nobitches?no=no%20${item.split(" ").join("%20")}`,
    };
}
exports.noBitches = noBitches;
/**
 * Generate a Master Oogway quote
 * @returns oogway quote image url
 */
function oogwayQuote({ type, quote, }) {
    let endpoint = "oogway";
    if (type === "2")
        endpoint += "2";
    return {
        imgUrl: `${baseUrl}/${endpoint}?quote=${quote.split(" ").join("%20")}`,
    };
}
exports.oogwayQuote = oogwayQuote;
/**
 * Pixelate an image
 * @returns pixelated image url
 */
function pixelate({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/pixelate?avatar=${imgUrl}`,
    };
}
exports.pixelate = pixelate;
/**
 * Convert hexadecimal color code to RGB color code
 * @returns rgb color code
 */
async function convertHexToRGB({ hexColor, }) {
    if (!(0, Utils_1.isHexColor)(hexColor))
        throw new Error("You must use hex color! Remove the \"#\" if you have any!");
    return (0, node_fetch_1.default)(`${baseUrl}/rgb?hex=${hexColor}`)
        .then(res => res.json())
        .then((json) => {
        return {
            red: json.r,
            green: json.g,
            blue: json.b,
        };
    });
}
exports.convertHexToRGB = convertHexToRGB;
/**
 * The simp card
 * @returns simp card image url
 */
function simpCard({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/simpcard?avatar=${imgUrl}`,
    };
}
exports.simpCard = simpCard;
/**
 * Spin (endpoint currently broken)
 * @returns null
 */
function spin({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return null;
    // return {
    // 	imgUrl: `${baseUrl}/spin?avatar=${imgUrl}`,
    // };
}
exports.spin = spin;
/**
 * Put an image over the DVD in Tonikawa
 * @returns DVD image url
 */
function tonikawaDVD({ imgUrl, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    return {
        imgUrl: `${baseUrl}/tonikawa?avatar=${imgUrl}`,
    };
}
exports.tonikawaDVD = tonikawaDVD;
/**
 * Generate a picture of a tweet
 * @returns tweet image url
 */
function tweet({ displayName, username, imgUrl, content, repliesCount, retweetsCount, likesCount, theme = "light", }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    displayName = displayName.split(" ").join("%20");
    username = username.split(" ").join("%20");
    return {
        imgUrl: `${baseUrl}/tweet?displayname=${displayName}&username=${username}&avatar=${imgUrl}&comment=${content}&replies=${repliesCount || ""}&retweets=${retweetsCount || ""}&likes=${likesCount || ""}&theme=${theme}`,
    };
}
exports.tweet = tweet;
/**
 * Generate an image of a youtube commentt
 * @returns comment image url
 */
function youtubeComment({ username, imgUrl, comment, }) {
    if (!(0, Utils_1.isImageAndGif)(imgUrl))
        throw new Error("URL must be a direct link to a JPG/PNG/GIF image!");
    username = username.split(" ").join("%20");
    comment = comment.split(" ").join("%20");
    return {
        imgUrl: `${baseUrl}/youtube-comment?username=${username}&avatar=${imgUrl}&comment=${comment}`,
    };
}
exports.youtubeComment = youtubeComment;
