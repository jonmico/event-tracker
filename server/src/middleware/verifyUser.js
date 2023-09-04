import UserModel from '../models/user';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import AppError from '../AppError';

export default function verifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) throw new AppError(400, 'Not signed in.');

  jwt.verify(token, process.env.TOKEN_KEY, async function (err, data) {
    const user = await UserModel.findById(data.id);
  });
  next();
}
