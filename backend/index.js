import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import connect from './database/connection.js';
import cors from 'cors'
import router from './router/index.js';
import errorHandler from './middleware/ErrorHandler.js';
import cookieParser from 'cookie-parser';
dotenv.config()

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 8080;
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


connect().then(()=>{
    app.listen(PORT,()=>{
        console.log('Listening to port ', PORT)
    })
})
.catch(error=>{
    console.log("error in connecting database")
})

// router 
app.use('/api',router)

// error handler 
app.use(errorHandler)


