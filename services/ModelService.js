// services/ModelService.js
import { GPTModel } from '../models/GPTModel.js';
import { TaskOptimizerModel } from '../models/TaskOptimizerModel.js';
import { RecommendationModel } from '../models/RecommendationModel.js';

export class ModelService {
    static loadModel(modelName) {
        switch (modelName) {
            case 'GPT':
                return new GPTModel();
            case 'TaskOptimizer':
                return new TaskOptimizerModel();
            case 'Recommendation':
                return new RecommendationModel();
            default:
                throw new Error('Model not found');
        }
    }
}
