import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express()
dotenv.config( {path:"./config/config.env"} ) //path where our environment variables are stored

app.use(cors({  //to connect frontend with backend.
    origin: [process.env.FRONTEND_URL], //here we give frontend url through which we want to connect to backend. 
    // we give this which we stored as environment variable in config.env
    methods: ["POST"], //here we write , which api methods we are going to use.
    credentials: true,

}))

app.use(express.json()); //through this we convert string into object.
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter)



dbConnection();

app.use(errorMiddleware);

export default app;