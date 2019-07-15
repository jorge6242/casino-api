require('../config');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/country'));


// parse application/json
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
    console.log(`escuchando puerto ${process.env.PORT}`);
});