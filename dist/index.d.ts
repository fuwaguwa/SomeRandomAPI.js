import * as animal from "./endpoints/animal";
import * as animu from "./endpoints/animu";
import * as canvas from "./endpoints/canvas";
import * as others from "./endpoints/others";
export * from "./typings/Animals";
export * from "./typings/Animu";
export * from "./typings/Canvas";
export * from "./typings/Others";
declare const _default: {
    /** Animal Endpoints */
    animal: typeof animal;

    /** Animu Endpoints */
    animu: typeof animu;

    /** Canvas Endpoints */
    canvas: typeof canvas;

    /** Others Endpoints */
    others: typeof others;
};
export default _default;
