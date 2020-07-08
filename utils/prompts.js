const questionsToUser = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "URL_project",
        message: "What is the project URL"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What information is needed to be able to use URL?"
    },
    {
        type: "input",
        name: "tech",
        message: "What technology and framework are used for this project?"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
];
module.exports = questionsToUser;


