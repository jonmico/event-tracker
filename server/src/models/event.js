import mongoose from 'mongoose';
import { userSchema } from './user.js';

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: String, required: true },
    maxAttending: { type: Number, default: 40 },
    attendingList: { type: [userSchema] },
    isWaitlist: { type: Boolean, required: true },
    maxWaitlist: { type: Number },
    waitlist: { type: [userSchema] },
  },
  { timestamps: true }
);

const EventModel = mongoose.model('Event', eventSchema);

export default EventModel;
