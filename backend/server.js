import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()
connectDB()
const app = express()


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//import routes
import RegisterRoutes from './routes/africasTalkingRoutes.js'
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

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)

