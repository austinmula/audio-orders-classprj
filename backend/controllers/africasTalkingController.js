import asyncHandler from 'express-async-handler'

import dotenv from "dotenv";
dotenv.config()




// @desc    Register a new user from ussd
// @route   POST
// @access  Public - to be made private in future
const registerUser = asyncHandler(async (req, res) => {
    try {
    // body from ussd
        const {
            sessionId,
            serviceCode,
            phoneNumber,
            text,
        } = req.body;
        console.log('body',req.body)

        let response = '';


        if (text == '') {
            response = `END We will be calling you shortly for your order!`
            // sleep a few seconds before calling
           //  twilio call and record
        }


        // Send the response back to the API
        res.set('Content-Type: text/plain');

        res.send(response);

    } catch (e) {
        throw new Error(`Something went wrong ${e}`)

    }
})

export {
    registerUser
}