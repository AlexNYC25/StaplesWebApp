//use express.js for web
const express = require('express');
const mongo_lib = require('./mongoLib.js')

let app = express();


/*
    TODO:
    Main api get request for the home page
    Should return all products from mongodb database when called by the front end
*/
app.get('/', (req, res) => {
    // mockup will be index
    res.send('Hello World');
});

/*
    TODO:
    get request where a string is passed from the front end to the back end
    and pass that string into external library module and generate data from it
*/
app.get('/:str', (req, res) => {
    console.log(req.params.str);
    res.send('searching for products using keyword ' + req.params.str);
})

/*
    TODO:
    get request for item using passed id and return data on that product
*/
app.get('/item/:id', (req, res) =>{
    // TODO: set up backend response to return data for item number
    console.log(req.params.id);
    res.send('searching for product with id ' + req.params.id);
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});