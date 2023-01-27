# SomeRandomAPI.js

Unofficial wrapper for https://some-random-api.ml/ written in TypeScript with documentations. This wrapper does not support `pokemon`, `premium`, `chatbot` and `welcome` endpoints.

Endpoints: https://some-random-api.ml/endpoints <br>
Documentation: https://some-random-api.ml/docs <br>

<a href="https://discord.gg/NFkMxFeEWr" ><img src="https://img.shields.io/discord/1020960562710052895?label=Discord%20Server&style=flat-square"></a>

## Installation
Package Link: https://www.npmjs.com/package/somerandomapi.js
```
npm i somerandomapi.js
```

To use it in your project:
```javascript
// import SRA from "../dist/index"
const SRA = require("somerandomapi.js");

const url = "https://cdn.discordapp.com/embed/avatars/2.png";
const tintedImgURL = SRA.canvas.filter.tint({
	imgUrl: url,
	hexColor: "1f1f1f",
});

console.log(tintedImgURL);
```

## Examples
Every function is documentated for your convenience! <br>
![](https://cdn.discordapp.com/attachments/1002189321631187026/1068446639192297513/image.png) <br>
![](https://cdn.discordapp.com/attachments/1002189321631187026/1068446195577532456/image.png) <br>

Animal Endpoints Example:
```javascript
const SRA = require("somerandomapi.js");

async function myFunc(animal) 
{
	// Get image of an animal
	console.log(await SRA.animal.image({ animal, }));

	// Get fact of an animal
	console.log(await SRA.animal.fact({ animal, }));

	// Get image and fact about the animal
	console.log(await SRA.animal.imageAndFact({ animal, }));
}

// Call your function
myFunc()
```

Animu Endpoints Example:
```javascript
const SRA = require("somerandomapi.js")

async function myFunc() 
{
	// Get an anime GIF
	console.log(await SRA.animu.gif({ type: "hug", }));
}

// Call your function
myFunc();
```

Canvas Endpoints Example:
```javascript
const SRA = require("somerandomapi.js")

const url = "https://cdn.discordapp.com/embed/avatars/2.png";

async function myFunc(url) 
{
	// Filter Endpoints
	console.log(SRA.canvas.filter.greyscale({ imgUrl: url, }));

	// Overlay Endpoints
	console.log(SRA.canvas.overlay.gay({ imgUrl: url, }));

	// Misc Endpoints
	console.log(SRA.canvas.misc.simpCard({ imgUrl: url, }));
}

// Call your function
myFunc(url);
```

Others Endpoints Example:
```javascript
const SRA = require("somerandomapi.js")

async function myFunc() 
{
	// Get lyrics for a song
	console.log(await SRA.others.lyrics({ title: "Mockingbird", }));

	// Encode a string in base64
	console.log(
		await SRA.others.base64({ mode: "encode", string: "let him cook", })
	);
}

// Call your function
myFunc();
```