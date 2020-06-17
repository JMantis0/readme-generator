const md = require("./utils/generateMarkdown.js");
const fs = require('fs');
const inq = require('inquirer');
const questions = [
	{
		type: 'input',
		name: 'fullName',
		message: 'Your full name: '
	},
	{
		type: 'input',
		name: 'username',
		message: 'GitHub username: '
	},
	{
		type: 'input',
		name: 'repo',
		message: 'Repository name: '
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
		type: 'list',
		name: 'license',
		message: 'Choose your license: ',
		choices: ['MIT License','ISC License', 'None']
	},
	{
		type: 'checkbox',
		name: 'badge',
		message: 'Select badge(s) to include: ',
		choices: ['Language Count', 'Repo-Size', 'Top Language']
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
	fs.writeFile(fileName, data, function() {
		console.log('Successfully created readme.md');
	});
}

function init() {
	console.log('Welcome to the Readme Generator.\n  Enter the following information:')
	inq.prompt(questions)
		.then(answers => {
			writeToFile('readme.md', md(answers));
		})
		.catch(error => {
		if (error) {
			console.log(error);
		}
	});
}

init();