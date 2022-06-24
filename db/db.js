// const res = require("express/lib/response");
// const req = require("express/lib/request");
// const async = require('node:async_hooks')
const { default: mongoose } = require('mongoose');
const Login = require('../api/models/login');
const bcrypt = require('bcrypt');

const postLogin = async (req) => {


    console.log("body is: " + req.body.password);
    const salt = await bcrypt.genSalt(10);

    let password = req.body.password;

    password = await bcrypt.hash(password, salt);

    const login = new Login({
        _id: mongoose.Types.ObjectId,
        userid: req.body.userid,
        password: password,
    });

    return await login.save();
}

module.exports = postLogin;
