const express= require('express');

const router = express.Router()

const {registerUser} = require('../controllers/africasTalkingController.js')


router.route('/call').post(registerUser);

module.exports = router;
