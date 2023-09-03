import mongoose from 'mongoose';
import { userSchema } from './user.js';

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    time: { type: String, required: true },
    maxAttending: { type: Number, default: 40 },
    attendingList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    isWaitlist: { type: Boolean, required: true },
    maxWaitlist: { type: Number },
    waitlist: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    location: {
      name: { type: String },
      position: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    keywords: { type: [String] },
    description: {
      type: String,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

const EventModel = mongoose.model('Event', eventSchema);

export default EventModel;

// TODO: What exactly do we want keywords to be?
