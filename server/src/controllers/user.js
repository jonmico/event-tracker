import AppError from '../AppError.js';
import UserModel from '../models/user.js';

export async function createUser(req, res, next) {
  try {
    const { firstName, lastName, email, phone, organization } = req.body;
    const newUser = new UserModel({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      phone,
      organization: organization.toLowerCase(),
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
