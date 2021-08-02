const asyncHandler = require('express-async-handler');

const dotenv = require("dotenv");
dotenv.config({
    path: "../.env",
});

// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


// @desc    Register a new user from ussd
// @route   POST
// @access  Public - to be made private in future
exports.registerUser = asyncHandler(async (req, res) => {
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

            // Send the response back to the API
            res.set('Content-Type: text/plain');

            res.send(response);
            console.log('after response')
            const twiml = '<Response><Say>Please record your order after the beep</Say> <Record timeout="60" transcribe="true" /></Response>';

            client.calls
                .create({
                    to: phoneNumber,
                    from: '+18018060735',
                    record: true,
                    twiml,
                })
                .then(call => console.log(call)).catch((error) => {
                console.error(error);

            });
        }
        console.log('after twilio')



    } catch (e) {
        throw new Error(`Something went wrong ${e}`)

    }
})
