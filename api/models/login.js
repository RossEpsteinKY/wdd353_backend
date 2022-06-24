const mongoose = require('mongoose');
const stringify = require('querystring');
const loginschema = mongoose.Schema({
    _id: mongoose.Schema.types.ObjectId,
    userid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
