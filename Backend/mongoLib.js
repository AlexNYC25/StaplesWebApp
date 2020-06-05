const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');


// connection url
const url = 'mongodb://localhost:27017';
// database name
const dbName = 'staples';
// database options 
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};

const dbState = {
    db: null
};

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
    //let formattedSearchString = "\"".concat(strInput, "\"")
    
    return strInput;
}

const connect = (callback) => {
    if(dbState.db){
        callback();
    }
    else{
        MongoClient.connect(url, mongoOptions, (err,client) => {
            if(err){
                callback(err);
            }
            else{
                dbState.db = client.db(dbName);
                callback();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDB = () => {
    return dbState.db;
}

module.exports = {connect, getPrimaryKey, getDB, formatInput};




