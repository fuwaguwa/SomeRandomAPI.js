// import SRA from "../dist/index"
const SRA = require("../dist/index");

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
