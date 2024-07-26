const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const validate = require('../utils/validate');
const { UserSchema, LoginSchema } = require('../schemas/userSchema');

router.post('/register', validate(UserSchema),register);
router.post('/login', validate(LoginSchema), login);

module.exports = router;