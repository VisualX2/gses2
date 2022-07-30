var requestURL = 'https://api.exchangerate.host/convert?from=BTC&to=UAH';
var fetch = require('node-fetch')


var btc_uah_req = async function(req,res){
    let response = await fetch(requestURL).then(response => response.json())
    return response.result
}

module.exports = btc_uah_req;