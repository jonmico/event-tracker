import mongoose, { mongo } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: String,
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
