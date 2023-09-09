import EventModel from '../models/event.js';
import UserModel from '../models/user.js';

export async function getEvents(req, res, next) {
  try {
    const events = await EventModel.find().populate('author').exec();
    res.json(events);
  } catch (err) {
    next(err);
  }
}

export async function getEvent(req, res, next) {
  try {
    const { id } = req.params;
    const event = await EventModel.findById(id).exec();
    if (!event) {
      res.status(404).json({ message: 'Event not found.' });
    }

    res.json(event);
  } catch (err) {
    next(err);
  }
}

export async function filterEvents(req, res, next) {
  try {
    const name = req.query.name;
    const keywords = req.query.keywords;

    if (name) {
      const events = await EventModel.find({ name: { $regex: name } });

      if (!events) {
        res.status(404).json({ message: 'No events found.' });
      }

      res.json(events);
    }

    if (keywords) {
      const events = await EventModel.find({ keywords: keywords });

      if (!events) {
        res.status(404).json({ message: 'No events found.' });
      }

      res.json(events);
    }

    // TODO: Find different ways to filter events. add option to filter events
    // by alphabetical order, by date etc. make it so you can pull events
    // on front end and filter those on the front end, but also pull
    // events with the filter already applied.
    // for example: i go to the page of events with 20 or so events loaded.
    // by default, they would be ordered in alphabetical a-z order. however,
    // if click "name" to filter from z-a it would repull. if i search for
    // a name, and then i filter from z-a, it should only filter what i have
    // filtered by name.
    // do i pull all events for a name and load them into state, then only
    // display 20 at a time?
    // is all filtering just handled on front end?
  } catch (err) {
    next(err);
  }
}

export async function createEvent(req, res, next) {
  try {
    const newEvent = await EventModel.create({
      ...req.body,
      name: req.body.name.toLowerCase(),
      location: { name: req.body.location.name.toLowerCase() },
    });

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

    if (!event) {
      res.status(404).json({ message: 'Event not found.' });
    }

    res.json(event);
  } catch (err) {
    next(err);
  }
}

export async function deleteEvent(req, res, next) {
  try {
    const { id } = req.params;
    const deletedEvent = await EventModel.findByIdAndDelete(id);

    if (!deletedEvent) {
      res.status(404).json({ message: 'Event not found.' });
    }

    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}

export async function addUserToEvent(req, res, next) {
  try {
    const { eventId, userId } = req.params;
    const event = await EventModel.findById(eventId).exec();

    if (!event) {
      res.status(404).json({ message: 'Event not found.' });
    }

    //check if user is in list
    if (
      event.attendingList.includes(userId) ||
      event.waitlist.includes(userId)
    ) {
      res.status(409).json({
        message:
          'This User ID is already signed up for the attending list or waitlist.',
      });
    }

    //check is attendingList is full
    if (event.attendingList.length === event.maxAttending) {
      //check if event allows waitlists
      if (!event.isWaitlist) {
        res.status(403).json({
          message: 'This event is full and does not allow waitlists.',
        });
      }
      //check if waitlist is full
      if (event.waitlist.length === event.maxWaitlist) {
        res
          .status(403)
          .json({ message: 'Both the attending list and waitlist are full' });
      }
      //if waitlist is not full, push onto waitlist
      event.waitlist.push(userId);
    } else {
      //if none of the above, push onto attendingList
      event.attendingList.push(userId);
    }

    const user = await UserModel.findById(userId).exec();

    //if user was added to attendingList, add event to attending events for user
    if (event.attendingList.includes(userId)) {
      user.attendingEvents.push(event._id);
    } else {
      //opposite case
      user.waitlistedEvents.push(event._id);
    }

    await user.save();
    await event.save();
    res.json(event);
  } catch (err) {
    next(err);
  }
}

export async function removeUserFromEvent(req, res, next) {
  try {
    const { eventId, userId } = req.params;
    const event = await EventModel.findById(eventId).exec();

    if (!event) {
      res.status(404).json({ message: 'Event not found.' });
    }

    if (
      !event.attendingList.includes(userId) &&
      !event.waitlist.includes(userId)
    ) {
      res.status(404).json({
        message: 'User is not registered for this event or does not exist.',
      });
    }

    //check which list the user is on and pull user out
    if (event.attendingList.includes(userId)) {
      event.attendingList.pull(userId);

      //checking if waitlist length is truthy (nonzero value)
      if (event.waitlist.length) {
        //getting ID of waitlist at position 0
        const id = event.waitlist.at(0);
        //pulling from waitlist and pushing onto attendingList
        event.waitlist.pull(id);
        event.attendingList.push(id);
      }
    } else {
      event.waitlist.pull(userId);
    }

    const user = await UserModel.findById(userId).exec();

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
    }

    //check which list user has the event on, pull event out
    if (user.attendingEvents.includes(eventId)) {
      user.attendingEvents.pull(eventId);
    } else {
      user.waitlistedEvents.pull(eventId);
    }

    await user.save();
    await event.save();

    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}
