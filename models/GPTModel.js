// models/GPTModel.js
import axios from 'axios';
import { config } from '../config/config.js';

export class GPTModel {
    static async predict(inputData) {
        try {
            const response = await axios.post('https://api.openai.com/v1/completions', {
                model: "text-davinci-003",
                prompt: inputData,
                max_tokens: 150
            }, {
                headers: {
                    'Authorization': `Bearer ${config.gptApiKey}`
                }
            });

            return response.data.choices[0].text.trim();
        } catch (error) {
            throw new Error("Error in GPT model prediction: " + error.message);
        }
    }
}
