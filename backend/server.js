const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const fileUpload = require("express-fileupload")
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
// inistialize app
const app = express();
global.TextEncoder = require("util").TextEncoder;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// adding middleware
app.use(cors());
app.use(express.json());

// connection string of mongo db using mongoose
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo db connected.")).catch(error => {
        console.log("Mongo db not connected. Error Msg = " + error.message);
    });

// loading routes
const route1 = require('./routes/form-post');

// create static route to access images and files etc
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
    createParentPath: true
}))

//Serves all the request which includes /logo in the url from Images folder
app.use('/uploadedData', express.static(__dirname + '/uploadedData'));


app.use('/', route1);

// adding port number
const PORT = process.env.PORT || 4000;


// starting server
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});

exports = module.exports = app;
