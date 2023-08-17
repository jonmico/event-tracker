import AppError from '../AppError.js';
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
    const event = await EventModel.findById(id)
      .populate('author')
      .populate('attendingList')
      .populate('waitlist')
      .exec();
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
    const newEvent = new EventModel({
      ...req.body,
      name: req.body.name.toLowerCase(),
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    next(err);
  }
}

export async function editEvent(req, res, next) {
  try {
    const { id } = req.params;
    const event = await EventModel.findByIdAndUpdate(
      id,
      { ...req.body, name: req.body.name.toLowerCase() },
      {
        new: true,
      }
    ).exec();

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

export async function addUserToEvent(req, res, next) {
  try {
    const { eventId, userId } = req.params;
    const event = await EventModel.findById(eventId).exec();

    //check if user is in list
    if (
      event.attendingList.includes(userId) ||
      event.waitlist.includes(userId)
    ) {
      throw new AppError(
        409,
        'This User ID is already signed up for the attendingList or waitlist.'
      );
    }

    //check is attendingList is full
    if (event.attendingList.length === event.maxAttending) {
      //check if event allows waitlists
      if (!event.isWaitlist) {
        throw new AppError(
          403,
          'This event is full and does not allow waitlists.'
        );
      }
      //check if waitlist is full
      if (event.waitlist.length === event.maxWaitlist) {
      }
      //if waitlist is not full, push onto waitlist
      event.waitlist.push(userId);
    } else {
      //if none of the above, push onto attendingList
      event.attendingList.push(userId);
    }

    await event.save();

    console.log(event);
    res.json(event);
  } catch (err) {
    next(err);
  }
}
