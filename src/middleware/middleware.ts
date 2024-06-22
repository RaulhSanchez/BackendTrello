// backend/src/middlewares/index.ts

import bodyParser from 'body-parser';
import cors from 'cors';
import { Application } from 'express';

export const setupMiddlewares = (app: Application) => {
    app.use(bodyParser.json());
    app.use(cors());
};
