// models/RecommendationModel.js
import axios from 'axios';
import { config } from '../config/config.js';

export class RecommendationModel {
    static async getRecommendations(userData) {
        try {
            const response = await axios.post('https://api.recommendations.com/v1/recommend', {
                user: userData
            }, {
                headers: {
                    'Authorization': `Bearer ${config.recommendationApiKey}`
                }
            });

            return response.data.recommendations;
        } catch (error) {
            throw new Error("Error in Recommendation model: " + error.message);
        }
    }
}
