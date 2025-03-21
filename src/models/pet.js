const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: String,
    species: String,
    age: Number,
    adopted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pet', petSchema);

