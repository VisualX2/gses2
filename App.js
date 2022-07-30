const express = require("express");
const router = require("./router")
const app = express()

app.set("port", process.env.PORT || 3000);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(router);


app.listen(app.get("port"), function(req,res){

})