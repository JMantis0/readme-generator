const fs = require('fs');
const inq = require('inquirer');

const questions = [
	{
		type: 'input',
		name: 'username',
		message: ' GitHub username: '
	},
	{
		type: 'input',
		name: 'title',
		message: 'Project Title: '
	},
	{
		type: 'input',
		name: 'description',
		message: 'Project Description: '
	},
	{
		type: 'confirm',
		name: 'tableOfContents',
		message: 'Include Table of Contents?'
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Installation instructions: '
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Usage instructions: '
	},
	{
		type: 'input',
		name: 'credits',
		message: 'Credits: '
	},
	{
		type: 'Input',
		name: 'license',
		message: 'License: '
	},
	{
		type: 'list',
		name: 'badge',
		message: 'Select badge(s) to include: ',
		choices: ['']
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'How to contribute: '
	},
	{
		type: 'input',
		name: 'tests',
		message: 'Tests: '
	},
	{
		type: 'input',
		name: 'questions',
		message: 'Questions: '
	}
];

function writeToFile(fileName, data) {
}

function init() {
	console.log('Welcome to the Readme Generator.\n  Enter the following information:')
	inq.prompt(questions
		).then(answers => {

			//  Compose the readme from the answers object here.
			let fileContent = 
			`## ${answers.title}\n\n` +
			`## Description\n\n` +
			`${answers.description}\n\n`;

			if (answers.tableOfContents) {
				//concatenate table of contents to fileContent variable
				fileContent += 
				`## Table of Contents\n\n` +
				`* [Installation](#installation)\n` +
				`* [Usage](#usage)\n` +
				`* [Credits](#credits)\n` +
				`* [License](#license)\n` +
				`* [Badges](#badges)\n` +
				`* [Contributing](#contributing)\n` +
				`* [Tests](#tests)\n\n`;
			}

			fileContent += 
			`## Installation\n\n` + 
			`${answers.installation}\n\n` +
			`## Usage\n\n` +
			`${answers.usage}\n\n` +
			`## Credits\n\n` +
			`${answers.credits}\n\n` +
			`## License\n\n` +
			`${answers.license}\n\n` +
			`## Contributing\n\n` +
			`${answers.contributing}\n\n` +
			`## Tests\n\n` +
			`${answers.tests}\n\n` +
			`## Questions\n\n` +
			`${answers.questions}`


			
			fs.writeFile('readme2.md', fileContent, function() {
				console.log('Successfully created readme.md');
			});

	}).catch(error => {
		if (error) {
			console.log(error);
		}
	});
}

init();
