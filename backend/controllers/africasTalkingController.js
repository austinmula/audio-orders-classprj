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
// @access  Public
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




    } catch (e) {
        throw new Error(`Something went wrong ${e}`)

    }
})

// @desc   Get all recordings
// @route   GET
// @access  Public
exports.getAllCalls = asyncHandler(async (req, res) => {
    try {
        console.log('get all calls')
        const songs = []

        client.recordings.list({limit: 20})
            .then(recordings =>
                {

                    recordings.forEach(r => {
                        const a = `https://api.twilio.com/2010-04-01/Accounts/${r.accountSid}/Recordings/${r.sid}.mp3`
                        songs.push(a)
                     })


                    res.json({
                        data:songs
                    })
                }
            ).catch((error) => {
            console.error(error);

        });



    } catch (e) {
        throw new Error(`Something went wrong ${e}`)

    }
})
