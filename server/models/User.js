const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
})