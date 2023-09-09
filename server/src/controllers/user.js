import UserModel from '../models/user.js';

export async function createUser(req, res, next) {
  try {
    const { firstName, password, lastName, email, phone, organization } =
      req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      res
        .status(400)
        .json({ message: 'An account with this email already exists.' });

    const newUser = await UserModel.create({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      password,
      phone,
      organization: organization?.toLowerCase(),
    });

    // const token = createSecretToken(newUser._id);

    // res.cookie('token', token, {
    //   withCredentials: true,
    //   httpOnly: false,
    // });

    res.json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).exec();

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
    }

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

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found.' });
    }

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

    if (!deletedUser) {
      res.status(404).json({ message: 'User not found.' });
    }

    res.status(204).json({});
  } catch (err) {
    next(err);
  }
}
