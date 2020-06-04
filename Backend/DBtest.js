const StaplesDB = require('./mongoLib');



if(StaplesDB.getDB() == null){
    StaplesDB.connect((err) => {
        if(err){
            console.log('Unable to connect to database');
            process.exit(1);
        }
        else {
            console.log('Successful');
            StaplesDB.getDB().collection('products').find({}).toArray((err, documents) => {
                if(err){
                    console.log(err);
                }
                else {
                    console.log(documents);
                    
                }
            })
        }
    })
}
else{
    StaplesDB.getDB().collection('products').find({}).toArray((err, documents) => {
        if(err){
            console.log(err);
        }
        else {
            console.log(documents);
            
        }
    })
}
