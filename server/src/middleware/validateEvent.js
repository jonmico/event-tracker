import AppError from '../AppError.js';

export default function validateEvent(req, res, next) {
  const { name, date, author, time, isWaitlist } = req.body;

  if (!name || !date || !author || !time || isWaitlist === undefined) {
    throw new AppError(400, 'Required fields are missing.');
  }

  next();
}
