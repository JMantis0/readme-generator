function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;
