import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js'

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './config/database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
// import workflowrouter from './routes/workflow.routes.js'


const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
// app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send("welcome to the home page of this tracker API!");

});


app.listen(PORT, async () => {
  console.log(`Subscription tracker api is running on http://localhost:${PORT}`);
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('Database connection error:', err.message);
    console.log('Server running without database connection for testing...');
  }
});

export default app;