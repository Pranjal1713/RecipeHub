const express = require('express');
const { registerUser, loginUser,registeredUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', registeredUser);

module.exports = router;
