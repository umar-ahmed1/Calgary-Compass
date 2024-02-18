//Create the express router
const express = require('express')
const router = express.Router()
const requireAuth = require("../middleware/requireAuth");


//Import the functions to handle user events
const {
    signupUser,
    loginUser,
} = require('../controllers/userController');

// login route
router.post('/login', loginUser);

//signup route
router.post('/signup',signupUser)



// export the router
module.exports = router;