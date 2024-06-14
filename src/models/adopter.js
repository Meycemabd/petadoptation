const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    petsAdopted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

module.exports = mongoose.model('Adopter', adopterSchema);