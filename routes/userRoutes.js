const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile,
  deleteProfile,
  getAllUsers,
  getUserById,
  deleteUser
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddlewares');

router.get('/profile', authMiddleware(), getProfile);
router.put('/profile', authMiddleware(), updateProfile);
router.delete('/profile', authMiddleware(), deleteProfile);

router.get('/', authMiddleware(['admin']), getAllUsers);
router.get('/:id', authMiddleware(['admin']), getUserById);
router.delete('/:id', authMiddleware(['admin']), deleteUser);

module.exports = router;