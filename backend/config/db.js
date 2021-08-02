import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
    try {
       console.log('DB WILL CONNECT HERE!')

    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export default connectDB
