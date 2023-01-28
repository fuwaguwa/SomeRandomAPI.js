import * as animal from "./endpoints/animal";
import * as animu from "./endpoints/animu";
import * as canvas from "./endpoints/canvas";
import * as others from "./endpoints/others";

export * from "./typings/Animals";
export * from "./typings/Animu";
export * from "./typings/Canvas";
export * from "./typings/Others";

export {
    /**
     * Animal Endpoints
     * 
     * https://some-random-api.ml/docs/animal
     * https://some-random-api.ml/docs/facts
     * https://some-random-api.ml/docs/img
     */
    animal,

    /**
     * Animu Endpoints
     * 
     * https://some-random-api.ml/docs/animu
     */
    animu,

    /**
     * Canvas Endpoints
     * 
     * https://some-random-api.ml/docs/canvas/filter
     * https://some-random-api.ml/docs/canvas/misc
     * https://some-random-api.ml/docs/canvas/overlay
     */
    canvas,

    /**
     * Others Endpoints
     * 
     * https://some-random-api.ml/docs/others
     */
    others
}