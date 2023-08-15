import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT ?? 3000;
const CONNECTION = process.env.MONGOOSE_CONNECTION_STRING;

async function connectDB() {
  try {
    await mongoose.connect(CONNECTION);
    console.log('Connected to database.');
  } catch (err) {
    console.error(err);
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
