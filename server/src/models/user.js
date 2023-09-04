import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    organization: { type: String },
    attendingEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    waitlistedEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  },
  { timestamps: true }
);

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
