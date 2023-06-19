const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const NinjaSchema = new Schema({
    city: {
        type:String,
        required:true
    },
    state:{
        type:String,
    },
    minTemp:{
        type:Number
    },
    maxTemp:{
        type:Number
    }
});

const Ninja = mongoose.model('ninja',NinjaSchema);
module.exports = Ninja;