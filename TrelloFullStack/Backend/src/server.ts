// backend/src/app.ts

import express from 'express';
import { setupMiddlewares } from './middleware/middleware';
import taskRoutes from './router/router';
import { connectDB } from './config/database';

const app = express();

// Configurar middlewares
setupMiddlewares(app);

// Conectar a la base de datos
connectDB();

// Configurar rutas
app.use('/api', taskRoutes);

export default app;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});