const { User } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;

  try {
    await User.update({ name, email }, { where: { id: req.user.id } });

    res.status(200).json({ message: 'Profile updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.user.id } });

    res.status(200).json({ message: 'Profile deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getAllUsers = async (req, res) => {
  const { page = 1, limit = 1 } = req.query;

  try {
    const users = await User.findAndCountAll({
      limit: parseInt(limit),
      offset: (page - 1) * limit
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// here we can also keep a flag like isDeleted in the user model.
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });

    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};