// services/PredictionService.js
import { ModelService } from './ModelService.js';
import { DataProcessor } from './DataProcessor.js';

export class PredictionService {
    static async makePrediction(modelName, inputData) {
        const processedData = DataProcessor.preprocessData(inputData);
        const model = ModelService.loadModel(modelName);
        return await model.predict(processedData);
    }
}
