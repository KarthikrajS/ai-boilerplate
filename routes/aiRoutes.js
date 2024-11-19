// routes/aiRoutes.js
import express from 'express';
import { PredictionService } from '../services/PredictionService.js';

const router = express.Router();

// Example route for task optimization
router.post('/optimizeTasks', async (req, res) => {
    const { modelName, taskData } = req.body;
    try {
        const result = await PredictionService.makePrediction(modelName, taskData);
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Additional AI-related routes can be added here

export default router;
