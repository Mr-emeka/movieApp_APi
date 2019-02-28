var app = require('express')();
var request = require ('request');

app.set("view engine", "ejs");



app.get('/',function(req, res){
    res.send("hello");
})


app.listen(3000,function(){

    console.log('Server started on port 3000')
});