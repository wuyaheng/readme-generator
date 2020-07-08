function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}


## Table of Contents

* [Tech/Framework Used](#TechUsed)

* [Usage](#usage)

* [Contributing](#contributing)

* [link](#Link)

* [Questions](#Questions)


## TechUsed
${data.tech}


## Usage
${data.usage}

## Contributing
${data.contributing}


## Link
${data.URL_project}


## Questions

For questions about the project contact ${data.github} or directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
