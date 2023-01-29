/**
 * @author Sal Carrera
 * @since 01/29/2023
 * @purpose Create RESTful middleware between Open AI / Chat GPT and Salesforce 
 */

import { Configuration, OpenAIApi } from "openai";
import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.KEY,
});


app.post('/', async (req, res) => {
    if (!configuration.apiKey) {
        res.status(500).json({
          error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
          }
        });
        return;
      }

      const lan = req.body.language || '';

      try {

        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(lan),
            max_tokens: 1000
            
        });

        res.send(completion.data.choices[0].text);
        
      } catch(error) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
          } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
              error: {
                message: 'An error occurred during your request.',
              }
            });
          } 
      } 
  })



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});


function generatePrompt(codeLanguage) {
    return `write some ${codeLanguage} code`;
}



