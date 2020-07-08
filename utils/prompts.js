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
        name: "URL_project",
        message: "What is the project URL"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a small description of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What information is needed to be able to use URL?"
    },
    // {
    //     type: "input",
    //     name: "techUsed",
    //     message: "What technology and framework are used for this project?"
    // },
    {
        type: "input",
        name: "contributing",
        message: "Enter Contributors names"
    }
];
module.exports = questionsToUser;