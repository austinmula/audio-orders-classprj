import express from 'express'

const router = express.Router()

import {registerUser} from '../controllers/africasTalkingController.js'


router.route('/call').post(registerUser);
export default router
