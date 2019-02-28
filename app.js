var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var keys = require('./keys');
var apikey = keys.OMBd_API_KEY;


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

app.use(express.static('public'));
app.set("view engine", "ejs");



app.get('/', function (req, res) {
    // console.log(apikey);
    res.render("home");

})

app.get('/result', function (req, res) {
    var query = req.query.search;

    var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=' + apikey;

    if (!query) {
        res.redirect('/')
    } else {
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var data = JSON.parse(body);
                res.render('results', {
                    data: data
                })
            }
        })
    }



})


app.listen(3000, function () {

    console.log('Server started on port 3000')
});