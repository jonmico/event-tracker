import EventModel from '../models/event.js';

export async function getEvents(req, res, next) {
  try {
    const events = await EventModel.find({}).exec();
    res.json(events);
  } catch (err) {
    next(err);
  }
}

export async function getEvent(req, res, next) {
  try {
    const { id } = req.params;
    const event = await EventModel.findById(id).exec();

    if (!event) throw new AppError(404, 'Event not found.');

    res.json(event);
  } catch (err) {
    next(err);
  }
}

export async function filterEvents(req, res, next) {
  const name = req.query.name;

  if (name) {
    const events = await EventModel.find({ name: { $regex: name } });
    res.json(events);
  } else {
    res.json('No events found.');
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

export async function editEvent(req, res, next) {
  try {
    const { id } = req.params;
    const event = await EventModel.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();

    if (!event) throw new AppError(404, 'Event not found');

    res.json(event);
  } catch (err) {
    next(err);
  }
}

export async function deleteEvent(req, res, next) {
  try {
    const { id } = req.params;
    const deletedEvent = await EventModel.findByIdAndDelete(id);

    if (!deletedEvent) throw new AppError(404, 'Event not found.');

    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}
