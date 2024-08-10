const express = require('express');
const { registerUser } = require('../controllers/signup_controller.js'); // Update this line
const {loginUser} = require("../controllers/login_controller.js");
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;