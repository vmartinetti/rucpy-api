// src/app.ts

import express, { Application } from 'express';
import { setRoutes } from './routes';
import { logger } from './middleware';
import { PORT } from './config';

const app: Application = express();

// Middleware
app.use(logger);
app.use(express.json());

// Routes
setRoutes(app);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});