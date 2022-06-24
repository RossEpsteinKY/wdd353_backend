const mongoose = require('mongoose');
const stringify = require('querystring');

const registrationSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    consent: {
        type: Boolean,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Login", loginSchema);
