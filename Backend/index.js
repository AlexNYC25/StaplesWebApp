//use express.js for web
const express = require('express');
// My own mongoDb functions
//const mongo_lib = require('./mongoLib.js')
// added so api calls can be completed
const cors = require('cors');
const staplesDB = require('./mongoLib');
const bodyParser = require('body-parser')
require('dotenv').config()



let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static('public'))


app.get('/test/', (req, res) => {
    // test json 
    // should be replaced by actual mongodb search results
    
   staplesDB.getDB().collection('products').find({}).toArray((err, documents) => {
       if(err){
           console.log(err);
       }
       else {
           
           console.log(documents);
           res.json(documents);
       }
   })

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
    const string = req.params.str;
    console.log(req.params.str);
    let queryString = { '$text': {'$search': string}};
    let score = {score: {$meta: "textScore"}};

    staplesDB.getDB().collection('products').find(queryString, score).project(score).sort(score).toArray( (err, documents) => {
        console.log(queryString);
        if(err) {
            console.log(err);
        }
        else {
            res.json(documents);
        }
    })

    
    //console.log(typeof(mongo_lib.handleUserSearch(req.params.str)));
    //res.json(searchResults);
})

/*
    TODO:
    get request for item using passed id and return data on that product
*/
app.get('/item/:id', (req, res) =>{
    
    let itemNumber = parseInt(req.params.id, 10);
    console.log(req.params.id);
    let queryString = {'_id' : itemNumber};

    staplesDB.getDB().collection('products').find(queryString).toArray( (err, documents) => {
        console.log(queryString);
        if(err){
            console.log(err);
        }
        else {
            
            res.json(documents);
        }
    })


    //res.send('searching for product with id ' + req.params.id);
})

app.post('/products/add', (req, res) => {
    // need to parse string to int to maintain uniformity and to not have duplicates
    let id = parseInt(req.body.id);
    let name = req.body.name;

    staplesDB.getDB().collection('products').insertOne({_id: id, Name: name}, (err, documents) => {
        
        //error handling with error messages returned to the page
        if(err){
            if(err.code == 11000){
                res.json({message: 'There already exists a product with that SKU'})
            }

            res.json({message: 'There was some sort of Error adding product to database'})
        }

        if(documents.insertedId == id){
            res.json({message: 'Product was added to database successfully'})
        }
        
    })

})

app.post('/products/rename', (req, res) => {
    let id = parseInt(req.body.id);
    let name = req.body.name;

    staplesDB.getDB().collection('products').updateOne({ _id: id}, { $set: {Name: name }}, (err, documents) => {
        // basic error handling for error in database
        if(err){
            res.json({message: 'Error occurred when trying to change product Name'})
            return;
        }

        // error message handling for different specific errors
        if(documents.matchedCount === 0){
            res.json({message: 'No Product was found with the entered id'})
        }

        if(documents.modifiedCount === 1){
            res.json({message: 'Product Name was modified Sucessfully'})
        }

    })
})

app.post('/products/locations', (req, res) => {
    //console.log("request for adding location has been recieved")

    let id = parseInt(req.body.id)
    let location = req.body.location

    staplesDB.getDB().collection('products').updateOne({_id: id}, {$push: {locations: location}}, (err, documents) => {
        //
        if(err){
            res.json({message: 'Error occurred when adding location to product.'})
        }

        //console.log(documents);

        //
        if(documents.matchedCount === 0){
            res.json({message: 'No Product was found with the entered id.'})
        }

        if(documents.modifiedCount === 1){
            res.json({message: 'Location was added to the product info.'})
        }
    })
})

app.post('/products/price', (req, res) => {
    let id =  parseInt(req.body.id)
    let price = parseInt(req.body.price)

    staplesDB.getDB().collection('products').updateOne({_id: id}, {$set: {price: price}}, (err, documents) => {
        if(err){
            res.json({message: 'Error occurred when adding price to product.'})
        }

        if(documents.matchedCount === 0){
            res.json({message: 'No Product was found with the entered id.'})
        }

        if(documents.modifiedCount === 1){
            res.json({message: 'New Price was added to the product info.'})
        }
    })
})

app.post('/products/images', (req, res) => {

    

})

staplesDB.connect((err) => {
    if(err) {
        console.log('Unable to connect to database');
        process.exit(1);
    }
    else {
        app.listen(8080, () => {
            console.log('Connected to database, app listening on port 8080')
        });
    }
})

