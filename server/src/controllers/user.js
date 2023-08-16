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
