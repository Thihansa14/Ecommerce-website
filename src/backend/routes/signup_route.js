const express = require('express');
const { registerUser, loginUser } = require('../controllers/signup_controller'); // Update this line
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;