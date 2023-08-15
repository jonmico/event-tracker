import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  createdDate: { type: Date, required: true },
  author: { type: String, required: true },
  maxAttending: { type: Number, default: 40 },
  attendingList: [UserSchema],
  isWaitlist: { type: Boolean, required: true },
  maxWaitlist: Number,
  waitlist: [UserSchema],
});

const EventModel = mongoose.model('Event', eventSchema);

export default Event;
