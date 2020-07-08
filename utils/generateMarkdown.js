function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}


## Table of Contents

* [Tech/Framework Used](#TechUsed)

* [link](#Link)

* [Usage](#usage)

* [Contributing](#contributing)

* [Questions](#Questions)


## TechUsed
${data.tech}

## Link
${data.URL_project}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Questions
![user profile image](${data.url})

For questions about the project contact ${data.github} or directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
