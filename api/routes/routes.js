const express = require("express");
const res = require("express/lib/response");
const req = require("express/lib/request");
const next = require("next");
const router = express.Router();


router.get("/", () =>{
    res.status(200).json({
        message: "Server is Up",
        method: req.method
    });
});

router.post("/login",(req,res,next)=>{

});

module.exports = router;


