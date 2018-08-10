const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    got: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});