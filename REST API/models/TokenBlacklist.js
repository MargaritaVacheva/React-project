const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const tokenBlacklist = new Schema({
    token: {
        type: String,
        required: true,
    }
});

module.exports = new Model('TokenBlacklist', tokenBlacklist);