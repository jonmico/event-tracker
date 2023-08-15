import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

export const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  organization: String,
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
