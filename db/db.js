import res from "express/lib/response";
import req from "express/lib/request";
import async from "async";
import bcrypt from "bcrypt";

const {default: mongoose } = require('mongoose');


const postLogin = async (req) => {

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
