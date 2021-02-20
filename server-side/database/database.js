const mongoose = require('mongoose');

module.exports = () => {
    const db = 'mongodb://localhost:27017/fitness-tracker';
    mongoose.connect(db);

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connection has established successfully!');
    });

    connection.on('error', err => {
        console.log(error);
    });
};
