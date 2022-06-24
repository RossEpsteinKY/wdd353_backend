const express = require("express");
// const res = require("express/lib/response");
// const req = require("express/lib/request");
const next = require("next");
const router = express.Router();
const postLogin = require('../../db/db');



router.get("/", () =>{
    res.status(200).json({
        message: "Server is Up",
        method: req.method
    });
});

// router.post("/login", (req,res,next) => {
//     postLogin(req).then(result =>{
//         console.log(result);
//            res.status(200).json({
//                message: "Login saved",
//                status: 200,
//                login: {
//                    userid: result.userid,
//                    password: result.password,
//                    metadata: {
//                        hostname: req.hostname,
//                        method: req.method
//                    }
//
//                }
//            })
//     })
// })



router.post('/login',(req,res,next) => {
    console.log('router post gets:  ' + req.body.password);
    postLogin(req).then(result =>{
       console.log(result);
       res.status(200).json({
           message: "Login saved",
           status: 200,
           login: {
               userid: result.userid,
               password: result.password,
               metadata: {
                   hostname: req.hostname,
                   method: req.method
               }

           }
       }).catch(err => {
           res.status(500).json({
               message: "Login failed",
               status: 500,
               error: {
                   message: err.message,
                   metadata: {
                       hostname: req.hostname,
                       method: req.method
                   }

               }
           });
       })
    });
});

module.exports = router;


