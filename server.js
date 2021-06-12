const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const items = require('./routes/api/items');


const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/key').DB_CONNECTION;

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('connected to DB...'))
    .catch(err => console.log('failed to connect'));

//use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));