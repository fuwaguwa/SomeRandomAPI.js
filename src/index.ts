import * as animal from "./endpoints/animal";
import * as animu from "./endpoints/animu";
import * as canvas from "./endpoints/canvas";
import * as others from "./endpoints/others";

export * from "./typings/Animals";
export * from "./typings/Animu";
export * from "./typings/Canvas";
export * from "./typings/Others";

module.exports = { animal, animu, canvas, others, };
