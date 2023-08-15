import mongoose from 'mongoose';
import { userSchema } from './user';

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    maxAttending: { type: Number, default: 40 },
    attendingList: [userSchema],
    isWaitlist: { type: Boolean, required: true },
    maxWaitlist: Number,
    waitlist: [userSchema],
  },
  { timestamps: true }
);

const EventModel = mongoose.model('Event', eventSchema);

export default EventModel;
