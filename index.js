const inqiurer = require("inquirer");
const fs = require("fs");
const prompts = require('./utils/prompts');
const API = require('./utils/api')
const generateMarkdown = require("./utils/generateMarkdown")



function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

const init = async () => {
  try {
    const promptResponse = await inqiurer.prompt(prompts);
    const githubResponse = await API.getUserProfile(promptResponse.github);
    const data = {
      ...promptResponse,
      url: githubResponse.data.avatar_url
    }
    writeToFile("README.md", generateMarkdown(data))
  } catch (error) {
    console.log(error)
  }
}

init();
