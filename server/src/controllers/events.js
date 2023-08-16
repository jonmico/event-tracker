import EventModel from '../models/event.js';

export async function getEvents(req, res, next) {
  try {
    const events = await EventModel.find({}).exec();
    res.json(events);
  } catch (err) {
    next(err);
  }
}

export async function createEvent(req, res, next) {
  try {
    const newEvent = new EventModel(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    next(err);
  }
}
