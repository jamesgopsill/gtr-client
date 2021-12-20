const fs = require("fs")

const dir = "./dist"

fs.rm(dir, { recursive: true }, (err) => { 
	if (err) { 
		console.error(err)
	} else { 
		console.log("Directory Cleaned!"); 
	} 
})
