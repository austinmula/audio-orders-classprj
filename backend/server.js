const express= require('express');
const cors =  require('cors');
const morgan=  require('morgan');
const dotenv = require('dotenv');
dotenv.config()

const app = express()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//import routes
const RegisterRoutes = require( './routes/africasTalkingRoutes.js');
//filter content to prevent nosql injection
const blackList = ['$','{','&&','||']
const options = {
    urlBlackList: blackList,
    bodyBlackList: blackList
}


//use routes
app.use('/api',RegisterRoutes)




app.get('/', (req, res) => {
    res.send('API is running....')
})



const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)

