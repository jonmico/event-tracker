import AppError from '../AppError.js';

export default function validateEvent(req, res, next) {
  const { name, date, author, isWaitlist } = req.body;

  if (!name || !date || !author || !isWaitlist) {
    throw new AppError(400, 'Required fields are missing.');
  }

  next();
}
