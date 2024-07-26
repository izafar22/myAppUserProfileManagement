const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ where: { name: role } });

    if (!userRole) {
      return res.status(400).json({ message: 'Invalid role.' });
    }

    const user = await User.create({ name, email, password: hashedPassword, roleId: userRole.id });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email }, include: Role });
    
    if(user && !await bcrypt.compare(password, user.password)){
      return res.status(400).json({message: 'Invalid Password'});
    }
    if (!user) {
      return res.status(400).json({ message: 'Invalid email'});
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};