var fs = require("fs")
var nodemailer = require('nodemailer')
var btc_uah = require("./btc_uah.js")

var send = async function(req,res){
    var email_array = [];
    let btc = await btc_uah(req,res)
    var loaded_json = fs.readFileSync('./emails.json')
    email_array = JSON.parse(loaded_json)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'avmtestmail123@gmail.com',
            pass: 'swsjfueeisgnoojv'
        }  
    });
    for(let i in email_array){
        var mailOptions = {
            from: 'AVMTestMail123@gmail.com',
            to: email_array[i],
            subject: 'BTC-UAH Rate',
            text: "1 BTC = " + btc + " UAH"
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        }); 
    }
    
}

module.exports = send;