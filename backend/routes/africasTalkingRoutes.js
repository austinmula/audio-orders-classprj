const express= require('express');

const router = express.Router()

const {registerUser,getAllCalls} = require('../controllers/africasTalkingController.js')


router.route('/call').post(registerUser);
router.route('/recordings').get(getAllCalls);

module.exports = router;
