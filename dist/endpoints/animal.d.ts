import { AnimalFactOptions, AnimalFactResult, AnimalImageAndFactOptions, AnimalImageAndFactResult, AnimalImageOptions, AnimalImageResult } from "../typings/Animals";
/**
 * Get a random fact and image of an animal
 * @returns animal fact and image url
 */
declare function imageAndFact({ animal, }: AnimalImageAndFactOptions): Promise<AnimalImageAndFactResult>;
/**
 * Get a random image of an animal
 * @returns animal image url
 */
declare function image({ animal, }: AnimalImageOptions): Promise<AnimalImageResult>;
/**
 * Get a random fact about an animal
 * @returns animal fact
 */
declare function fact({ animal, }: AnimalFactOptions): Promise<AnimalFactResult>;
export { imageAndFact, image, fact };
