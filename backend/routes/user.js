//Create the express router
const express = require('express')
const router = express.Router()
const requireAuth = require("../middleware/requireAuth");


//Import the functions to handle user events
const {
    signupUser,
    loginUser,
    getUserItineraries,
    addItineraryUser
} = require('../controllers/userController');

// login route
router.post('/login', loginUser);

//signup routees
router.post('/signup',signupUser)

router.get('/getitinerary',getUserItineraries)

router.post('/setitinerary',addItineraryUser)





// export the router
module.exports = router;