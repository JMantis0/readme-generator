const fs = require('fs');
const inq = require('inquirer');

const questions = [
	{
		type: 'input',
		name: 'User entry',
		message: ' GitHub username: ',

	},
	{
		type: 'list',
		name: 'Badge selection',
		message: 'Select badge(s):',
		choices: ['']

	},
	{
		type: 'input',
		name: 'Description',
		message: 'Enter Project Description:'
	},
	{
		type: 'Input',
		name: 'Table of Contents',
		message: 'Enter a Table of Contents'
	},
	{
		type: 'Input',
		name: 'Installation',
		message: 'Enter installation instructions'
	},
	{
		type: 'Input',
		name: 'Usage',
		message: 'Enter usage section'
	},
	{
		type: 'Input',
		name: 'License',
		message: 'Enter License'
	},
	{
		type: 'Input',
		name: 'Contributing',
		message: 'Enter contributors'
	},
	{
		type: 'Input',
		name: 'Tests',
		message: 'Enter test section'
	},
	{
		type: 'Input',
		name: 'Questions',
		message: 'Question section'
	}
];

function writeToFile(fileName, data) {
}

function init() {
	console.log('Welcome to the Readme Generator.\n  Enter the following information:')
	inq.prompt(questions
		).then(answers => {
		console.log(answers);
	}).catch(error => {
		if (error) {
			console.log(error);
		}
	});
}

init();
