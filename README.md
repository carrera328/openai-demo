# Express JS - Open AI / Chat GPT Salesforce Integration

This is an example of a RESTful Chat GPT API built with Express JS to integrate Open AI / Chat GPT with Salesforce.

## Requirements
- Node.js
- OpenAI API Key

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Add your OpenAI API Key to a `.env` file or set as an environment variable

## Usage
1. Run the server with `npm start`
2. Send a POST request to `http://localhost:<PORT>` with a JSON body containing a `language` property

Example JSON body:  
`
{
  "language": "JavaScript"
}
`


The response will be a string of code written in the specified language.

## Configuration
- The server listens on the port specified in the `PORT` environment variable.
- The OpenAI API Key can be set as an environment variable or added to a `.env` file in the root of the project.

## Contributor
- Sal Carrera, since 01/29/2023

## Notes
- If the OpenAI API key is not configured, the response will return a 500 error with a message to follow the instructions in the README.
- If there is an error with the OpenAI API request, the error response will be logged to the console and returned in the HTTP response.
