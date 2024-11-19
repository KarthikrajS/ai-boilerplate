# AI Boilerplate

This repository provides a modular foundation for integrating and using AI models in your applications. You can easily plug in different AI models, switch between them, and interact with them via standardized API routes.

## Features:
- Support for multiple AI models (e.g., GPT, Task Optimizer, Recommendation).
- Configurable via environment variables.
- JWT-based authentication for secure access to AI endpoints.
- Data preprocessing and model interaction are abstracted into reusable services.

## Setup:
1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables in the `.env` file.
4. Start the server:
    ```bash
    npm start
    ```

## Usage:
- Make POST requests to `/api/ai/optimizeTasks` or other available routes to interact with the models.

## Extending:
- Add new AI models by creating a new file in the `models/` directory and updating `ModelService.js`.
- Add new API routes as needed in `routes/aiRoutes.js`.
