const mongoose = require('mongoose');

const legendSchema = new mongoose.Schema({
    name: String,
    title: String,
    city: String,
    lat: Number,
    lng: Number,
    image: String,
    description: String,
    achievements: [String],
    field: String,
    color: String
});

module.exports = mongoose.model('Legend', legendSchema);