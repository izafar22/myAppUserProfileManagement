const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

const authMiddleware = (roles = []) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(decoded.id, { include: Role });

      if (!user || (roles.length && !roles.includes(user.Role.name))) {
        return res.status(403).json({ message: 'Access denied. You do not have permission to perform this action.' });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };
};

module.exports = authMiddleware;