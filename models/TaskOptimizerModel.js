// models/TaskOptimizerModel.js
import axios from 'axios';
import { config } from '../config/config.js';

export class TaskOptimizerModel {
    static async optimizeTasks(taskData) {
        try {
            const response = await axios.post('https://api.taskoptimizer.com/v1/optimize', {
                data: taskData
            }, {
                headers: {
                    'Authorization': `Bearer ${config.taskOptimizerApiKey}`
                }
            });

            return response.data.optimizedTasks;
        } catch (error) {
            throw new Error("Error in Task Optimizer model: " + error.message);
        }
    }
}
