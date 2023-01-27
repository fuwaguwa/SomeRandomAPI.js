import { CanvasBaseOptions, CanvasResult } from "../../typings/Canvas";
/**
 * Overlays USSR flags over image
 * @returns comrade image url
 */
declare function comrade({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays the gay flag over image
 * @returns gay image url
 */
declare function gay({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays a glass over the image
 * @returns glass image url
 */
declare function glass({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays prison bars over image
 * @returns jail image url
 */
declare function jail({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays GTA mission passed over image
 * @returns passed image url
 */
declare function passed({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays triggered over image
 * @returns triggered image url
 */
declare function triggered({ imgUrl, }: CanvasBaseOptions): CanvasResult;
/**
 * Overlays wasted over image
 * @returns wasted image url
 */
declare function wasted({ imgUrl, }: CanvasBaseOptions): CanvasResult;
export { comrade, gay, glass, jail, passed, wasted, triggered };
