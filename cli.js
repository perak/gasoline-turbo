#! /usr/bin/env node

const commandLineArgs = require("command-line-args");
const fs = require("fs");
const path = require("path");
const replaceExt = require('replace-ext');
const gt = require("./gasoline-turbo.js");

const optionDefinitions = [
  { name: "input", alias: "i", type: String },
  { name: "output", alias: "o", type: String },
  { name: "format", alias: "f", type: String },
  { name: "overwrite", alias: "w", type: Boolean}
];

const args = commandLineArgs(optionDefinitions);

console.log("");
console.log("Generic Template (GT - but \"Gasoline Turbo\" smells better)");

var printUsage = function() {
	console.log("");
	console.log("Usage:");
	console.log("\tgasoline-turbo -i input.json -o output_dir -f blaze");
	console.log("\t\t-i, --input\tInput file");
	console.log("\t\t-o, --output\tOutput directory");
	console.log("\t\t-f, --format\tOutput format. Can be \"blaze\", \"react\", \"angular\" or \"html\". Default: \"blaze\".");
	console.log("\t\t-w, --overwrite\tOverwrite existing output files.");
	console.log("");
	console.log("Enjoy! (and expect bugs)");
	console.log("");
};

if(!args.input) {
	printUsage();
	process.exit(1);
}

if(!fs.existsSync(args.input)) {
	console.log("Error: input file \"" + args.input + "\" not found.");
	process.exit(1);
}

var inputStat = fs.lstatSync(args.input);

if(!inputStat.isFile()) {
	console.log("Error: input \"" + args.input + "\" is not a file.");
	process.exit(1);
}

if(!args.output) {
	printUsage();
	process.exit(1);
}

if(!fs.existsSync(args.output)) {
	console.log("Error: output directory \"" + args.output + "\" not found.");
	process.exit(1);
}

var outputStat = fs.lstatSync(args.output);

if(!outputStat.isDirectory()) {
	console.log("Error: output \"" + args.output + "\" is not a directory.");
	process.exit(1);
}

// read input file
var inputFile = "";
try {
	inputFile = fs.readFileSync(args.input, "utf8");
} catch(e) {
	console.log("Error: cannot read input file. " + e.message);
	process.exit(1);
}

// parse input file
var inputObject = {};
try {
	inputObject = JSON.parse(inputFile);
} catch(e) {
	console.log("Error: cannot parse input file. Maybe invalid JSON. " + e.message);	
	process.exit(1);
}


var writeOutput = function(content, fileExt) {
	var outputPath = path.join(args.output, replaceExt(path.basename(args.input), fileExt));

	if(fs.existsSync(outputPath) && !args.overwrite) {
		console.log("Error: output file \"" + outputPath + "\" already exists.");
		console.log("Use -w switch to overwrite.");
		process.exit(1);
	}

	try {
		fs.writeFileSync(outputPath, content, "utf8");
	} catch(e) {
		console.log("Error: cannot write output \"" + outputPath + "\".");
		process.exit(1);
	}
};


var outputFormat = (args.format || "blaze").toLowerCase();
switch(outputFormat) {
	case "blaze": {
		console.log("");
		console.log("Converting to Blaze...");
		gt.getBlaze(inputObject, function(err, html, js) {
			if(err) {
				console.log(err.message);
				process.exit(1);
			}

			writeOutput(html, ".html");
			writeOutput(js, ".js");

			console.log("");
			console.log("Success.");
			console.log("");
		});
	}; break;

	case "react": {
		console.log("");
		console.log("Converting to React...");
		gt.getReact(inputObject, function(err, jsx) {
			if(err) {
				console.log(err.message);
				process.exit(1);
			}

			writeOutput(jsx, ".jsx");

			console.log("Success.");
			console.log("");
		});

	}; break;

	case "angular": {
		console.log("");
		console.log("Converting to Angular...");
		gt.getAngular(inputObject, function(err /* ,html, ...??? */) {
			if(err) {
				console.log(err.message);
				process.exit(1);
			}

			// writeOutput(html, ".html");
			// ...

			console.log("");
			console.log("Success.");
			console.log("");
		});

	}; break;

	case "html": {
		console.log("");
		console.log("Converting to static HTML...");
		gt.getHTML(inputObject, function(err, html) {
			if(err) {
				console.log(err.message);
				process.exit(1);
			}

			writeOutput(html, ".html");

			console.log("Success.");
			console.log("");
		});

	}; break;

	default: {
		console.log("Error: unknown output format \"" + outputFormat + "\". Must be one of: \"blaze\", \"react\" or \"angular\".");
		process.exit(1);
	}
}
