const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json(), cors());
app.use(express.urlencoded({
    extended: true
}));

const pub_router = require('./routes/publications.js')
app.use(pub_router)


//Server listening
app.listen(port, () => {
    console.log('Server started on port ', port);
    
});
