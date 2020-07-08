function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

* Tech/Framework Used

* Usage

* Contributor

* links

* Questions


## Tech/Framework Used


## Usage
${data.usage}

## Contributor
${data.contributing}


## Link to project URL
${data.URL_project}


## Questions

For questions about the project contact ${data.github} or directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
