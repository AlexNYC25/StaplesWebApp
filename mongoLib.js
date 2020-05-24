const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// connection url
const url = 'mongodb://localhost:27017';
// database name
const dbName = 'test'
// create a client 
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// basic template for querying database
let x = 'Pine|PINE';
const findDocuments = function(db, callback) {
    // gets the myTestCollection1
    const collection = db.collection('myNewCollection1');
    const temp = 'Pi'
    // find some documents
    // currently it queries all documents using {}
    let x = { 'x': {$regex:'pi'}}
    collection.find(x, {collation: {locale: 'en', strength: 2}}).toArray( (err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}

const formatInput = function(strInput){
    let searchKeywords = strInput.split(' ');
    let formattedSearchString = '';

    //str.concat(formattedSearchString, '(');
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
// 

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

console.log(formatInput('Five Star Spiral Notebook'))
