let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String,
       
    },
    {
        collection: "contactList"
    }
);

module.exports = mongoose.model('ContactList', contactModel);