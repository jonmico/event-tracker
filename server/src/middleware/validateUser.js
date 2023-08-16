import AppError from '../AppError.js';

export default function validateUser(req, res, next) {
  const { firstName, lastName, email, phone } = req.body;
  if (!firstName || !lastName || !email || !phone) {
    throw new AppError(400, 'Required fields are missing.');
  }
  next();
}
