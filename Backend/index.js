//use express.js for web
const express = require('express');
// My own mongoDb functions
//const mongo_lib = require('./mongoLib.js')
// added so api calls can be completed
const cors = require('cors');
const mongo_lib = require('./mongoLib');

let app = express();

app.use(cors());


app.get('/test/', (req, res) => {
    // test json 
    // should be replaced by actual mongodb search results
    res.json(
        [{
            "_id": 1,
            "index": 100,
            "age": 100,
            "eyeColor": "blue",
            "name": "Doctor Who"
        }]
    )

    console.log("call to test api was made")
})



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

    May no longer be needed
*/
app.get('/:str', (req, res) => {
    console.log(req.params.str);
    
    console.log(typeof(mongo_lib.handleUserSearch(req.params.str)));
    //res.json(searchResults);
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


app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});