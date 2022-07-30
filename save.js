var fs = require("fs")

var save = function(mail){
    var email_array = [];
    var allow_push = true;
    if(fs.existsSync("./emails.json")){
        var loaded_json = fs.readFileSync('./emails.json')
        email_array = JSON.parse(loaded_json)
        
        for(let i in email_array) {
            if(email_array[i] == mail){
                
                allow_push = false
            }
        }
    }

    if(allow_push == true){
        email_array.push(mail)
        var newJSON = JSON.stringify(email_array)
        fs.writeFileSync('./emails.json', newJSON);
    }
    
}

module.exports = save;