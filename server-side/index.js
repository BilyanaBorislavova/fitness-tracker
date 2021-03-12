const express = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database/database')();
const registerRoute = require('./routes/register-route');
const { DEFAULT_PORT } = require('./constants/constants');

const PORT = process.env.PORT || DEFAULT_PORT;

express.use(cors());
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: true }));

express.get('/', (req, res) => {
    res.send('Working')
});

express.use('/auth', registerRoute);

express.listen(PORT, () => {
    console.log(`App is running successfully on port ${PORT}!`);
});
