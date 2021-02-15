const express = require('express')();
const database = require('./database/database')();
const { DEFAULT_PORT } = require('./constants/constants');

const PORT = process.env.PORT || DEFAULT_PORT;

express.listen(PORT, () => {
    console.log('App is running successfully!');
});
