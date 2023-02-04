// import SRA from "../dist/index"

const SRA = require("../dist/index");

async function myFunc() 
{
	// Get lyrics for a song
	const lyrics = await SRA.others.lyrics({ title: "Mockingbird" });

	if (!lyrics) throw new Error('Did not get lyrics');

	// Encode a string in base64
	const res = await SRA.others.base64({ mode: "encode", string: "let him cook", });

	if (!res?.string) throw new Error('Encode failed');
}

// Call your function
myFunc();
