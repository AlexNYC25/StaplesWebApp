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
const findDocuments = function(db, callback) {
    // gets the myTestCollection1
    const collection = db.collection('myNewCollection1');
    // find some documents
    // currently it queries all documents using {}
    collection.find({}).toArray( (err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
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

