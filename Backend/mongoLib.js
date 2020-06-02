const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection url
const url = 'mongodb://localhost:27017';
// database name
const dbName = 'staples';


// create a client object
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// basic template for querying database
const findDocuments = function(db, callback) {
    // gets the myTestCollection1
    const collection = db.collection('myNewCollection1');
    const temp = 'Pi'
    // find some documents
    // currently it queries all documents using {}
    let y = 'pi'
    let x = { 'x': {$regex:y}}
    collection.find(x, {collation: {locale: 'en', strength: 2}}).toArray( (err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}



/*
    Description: Simple function where a sting is passed, where it is there broken into
                    it's individual words, then added with regex or '|' then returned string
    Arguments: string to be passed into function
    Output: a regex string to be used for querying database

    TODO:
        So far we can search database for the individual search words but not common merged words
        It can find paper and mate but not papermate 
*/
const formatInput = function(strInput){
    let searchKeywords = strInput.split(' ');
    let formattedSearchString = '';

    for(let i = 0; i < searchKeywords.length; i++){
        if( i == (searchKeywords.length-1)){
            formattedSearchString = formattedSearchString.concat(searchKeywords[i]);
        }
        else{
            formattedSearchString = formattedSearchString.concat(searchKeywords[i], '|');
        }
        
    }
    
    return formattedSearchString;
}


/*
    Description: function to take in db object and execute search string
    Arguments: mongo db object, search string
    Outputs: return formatted results
*/
const findStaplesProducts = (db, string, callback) => {
    // set collection to be staplesProducts
    const collection = db.collection('products');

    let formattedString = formatInput(string);

    let queryString = { 'Name': {$regex: formattedString}};
    
    collection.find(queryString, {collation: {locale:'en', strength: 2}}).toArray( (err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        results = docs;
        callback(docs);

        return docs;
    })


    //return results;

}

/*
    Description: This will be the main function that will be called to handle user input and return the json to be used in the state
*/
const handleUserSearch = (searchString) => {

    client.connect( (err) => {
        assert.equal(null, err);
        const db = client.db(dbName);

        return findStaplesProducts(db, searchString, () => {
            client.close();
        });
    })
}


/*
// use connect method to conncect to the server
client.connect( (err)=> {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    
    findDocuments(db, function() {
        client.close();
    });

    


    //client.close();
})
*/


handleUserSearch("Accel")