export type AnimalImageAndFact =
	| "bird"
	| "cat"
	| "dog"
	| "fox"
	| "kangaroo"
	| "koala"
	| "panda"
	| "raccoon"
	| "red_panda";
export type AnimalImage =
	| "bird"
	| "cat"
	| "dog"
	| "fox"
	| "kangaroo"
	| "koala"
	| "panda"
	| "pikachu"
	| "raccoon"
	| "red_panda"
	| "whale";
export type AnimalFact = "bird" | "cat" | "dog" | "fox" | "koala" | "panda";

export interface AnimalImageAndFactResult
	extends AnimalImageResult,
		AnimalFactResult {}

export interface AnimalImageResult {
	/**
	 * animal image url
	 */
	imgUrl: string;
}

export interface AnimalFactResult {
	/**
	 * animal fact
	 */
	fact: string;
}

export interface AnimalImageAndFactOptions {
	/**
	 * animal name
	 */
	animal: AnimalImageAndFact;
}

export interface AnimalImageOptions {
	/**
	 * animal name
	 */
	animal: AnimalImage;
}

export interface AnimalFactOptions {
	/**
	 * animal name
	 */
	animal: AnimalFact;
}
