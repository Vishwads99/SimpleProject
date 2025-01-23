import mongoose from "mongoose";
import validator from "validator";




const reservationSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength: [2, "First name must contain atleast 2 characters !!"],
        maxLength: [30, "First name cannot exceed 30 characters !!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [2, "last name must contain atleast 2 characters !!"],
        maxLength: [30, "last name cannot exceed 30 characters !!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email !"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must be of 10 digits"],
        maxLength: [10, "Phone number must be of 10 digits"],
    },
    time: {
        type: String,
        required: true, 
    },
    date: {
        type: String,
        required: true, 
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);