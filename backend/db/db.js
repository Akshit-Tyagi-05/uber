const mongoose = require('mongoose');

function connectTodb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Connected to DB');
    })
    .catch(err => {
        console.log('DB err:', err.message)
    });
}

module.exports = connectTodb;