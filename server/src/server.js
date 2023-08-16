import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import eventsRouter from './routes/events.js';

const app = express();

const PORT = process.env.PORT ?? 3000;
const CONNECTION = process.env.MONGOOSE_CONNECTION_STRING;

app.use(express.json());
app.use(cors());

app.use('/api/events', eventsRouter);

async function connectDB() {
  try {
    await mongoose.connect(CONNECTION);
    console.log('Connected to database.');
  } catch (err) {
    console.error(err);
  }
}

connectDB();

app.use((req, res, next) => {
  res.status(404).json("404 Error: We can't find that!");
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong.';

  res.status(statusCode).send(err);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`);
});
