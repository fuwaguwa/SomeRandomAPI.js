import fetch from "node-fetch";
import {
	AnimalFactOptions,
	AnimalFactResult,
	AnimalImageAndFactOptions,
	AnimalImageAndFactResult,
	AnimalImageOptions,
	AnimalImageResult
} from "../typings/Animals";

const baseURL = "https://some-random-api.com";

/**
 * Get a random fact and image of an animal
 * @returns animal fact and image url
 */
async function imageAndFact({
	animal,
}: AnimalImageAndFactOptions): Promise<AnimalImageAndFactResult> 
{
	return fetch(`${baseURL}/animal/${animal}`)
		.then(res => res.json())
		.then((json) => 
		{
			return {
				imgUrl: json.image,
				fact: json.fact,
			} as AnimalImageAndFactResult;
		});
}

/**
 * Get a random image of an animal
 * @returns animal image url
 */
async function image({
	animal,
}: AnimalImageOptions): Promise<AnimalImageResult> 
{
	return fetch(`${baseURL}/img/${animal}`)
		.then(res => res.json())
		.then((json) => 
		{
			return {
				imgUrl: json.link,
			} as AnimalImageResult;
		});
}

/**
 * Get a random fact about an animal
 * @returns animal fact
 */
async function fact({ animal, }: AnimalFactOptions): Promise<AnimalFactResult> 
{
	return fetch(`${baseURL}/facts/${animal}`)
		.then(res => res.json())
		.then((json) => 
		{
			return json as AnimalFactResult;
		});
}

export { imageAndFact, image, fact };
