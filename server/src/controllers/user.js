import AppError from '../AppError.js';
import UserModel from '../models/user.js';
import createSecretToken from '../utils/secretToken.js';
import bcrypt from 'bcrypt';

export async function createUser(req, res, next) {
  try {
    const { firstName, password, lastName, email, phone, organization } =
      req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      throw new AppError(400, 'An account with this email already exists.');

    const newUser = new UserModel({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      password,
      phone,
      organization: organization?.toLowerCase(),
    });

    const token = createSecretToken(newUser._id);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });

    await newUser.save();
    res.json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).exec();

    if (!user) throw new AppError(404, 'User not found.');

    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function editUser(req, res, next) {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, organization } = req.body;

    const updatedUser = await UserModel.findById(id);

    if (!updatedUser) throw new AppError(404, 'User not found.');

    updatedUser.firstName = firstName.toLowerCase();
    updatedUser.lastName = lastName.toLowerCase();
    updatedUser.email = email.toLowerCase();
    updatedUser.phone = phone;
    updatedUser.organization = organization
      ? organization.toLowerCase()
      : undefined;

    await updatedUser.save();

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) throw new AppError(404, 'User not found.');

    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}
