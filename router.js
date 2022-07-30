var express = require("express")
var router = express.Router();
var btc_uah = require("./btc_uah.js")
var save = require("./save")
const bodyParser = require('body-parser');
var snd = require("./send")
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get("/rate", async function(req, res){
    const result = await btc_uah(req,res)
    res.send("1 BTC = " + result + " UAH")
})

router.get("/subscribe", function(req, res){
    res.render("subscr_form")
})

router.post("/subscribe", urlencodedParser, function(req,res){
    save(req.body.email)
    res.render("subscr_form");
})

router.get("/sendEmails", function(req, res){
    res.render("send_form")
})

router.post("/sendEmails", urlencodedParser, function(req,res){
    snd(req,res)
    res.render("send_form");
})
module.exports = router;
