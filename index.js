import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import aiRoutes from './routes/aiRoutes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(authMiddleware);  // Ensures AI routes require authentication

// API Routes
app.use('/api/ai', aiRoutes);

// Server setup
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
