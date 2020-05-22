//use express.js for web
const express = require('express');
// handlbars engine handling
const hbs = require('express-handlebars');

let app = express();


app.use(express.static('/public'))

// sets handlebars engine as view engine
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    // mockup will be index
    res.render('home');
});

app.get('/item', (req, res) =>{
    // add in render functionality for product items
    // TODO: mockup will be 'product'
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});