// const res = require("express/lib/response");
// const req = require("express/lib/request");
// const async = require('node:async_hooks')
const { default: mongoose } = require('mongoose');
const Login = require('../api/models/login');
const Register = require('../api/models/registration');
const bcrypt = require('bcrypt');

const postLogin = async (req) => {

    const salt = await bcrypt.genSalt(10);

    let password = req.body.password;

    password = await bcrypt.hash(password, salt);

    const login = new Login({
        _id: mongoose.Types.ObjectId(),
        userid: req.body.userid,
        password: password,
    });

    return await login.save();
}

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

module.exports = postLogin;
