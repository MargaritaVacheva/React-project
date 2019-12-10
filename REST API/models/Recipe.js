const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const recipeSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    ingredients: {
        type: String,
        required: true,
    },

    method: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    serves: {
        type: Number,
        required: true,
    },

    cookingTime: {
        type: Number,
        required: true,
    },

    prepTime: {
        type: Number,
        required: true,
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Recipe', recipeSchema);