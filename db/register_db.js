const { default: mongoose } = require('mongoose');
const Register = require('../api/models/registration');
const bcrypt = require('bcrypt');
const registerUser = async (req) =>{

    const newUser = new Register({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        age: req.body.age,
        gender: req.body.gender,
        consent: req.body.consent,
        bio: req.body.bio,

    });

    return await newUser.save();
}
module.exports = registerUser;
