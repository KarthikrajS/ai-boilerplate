// services/RecommendationService.js
import { config } from '../config/config.js';
import axios from 'axios';

export class RecommendationService {
    static async getRecommendations(userData) {
        try {
            const response = await axios.post('https://api.recommendation.com/v1/recommend', {
                user: userData
            }, {
                headers: {
                    'Authorization': `Bearer ${config.recommendationApiKey}`
                }
            });

            return response.data.recommendations;
        } catch (error) {
            throw new Error("Error in Recommendation service: " + error.message);
        }
    }
}
