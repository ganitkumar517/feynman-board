const express = require("express");
const bodyParser = require('body-parser');
const route = require('./routes/route');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
var cors = require('cors');

var corsOptions = {
    origin: '*',
}
app.use(cors(corsOptions))

mongoose.connect("mongodb://localhost:27017/index", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 8000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8000))
});