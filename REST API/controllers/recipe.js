const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Recipe.find().populate('author')
            .then((recipes) => res.send(recipes))
            .catch(next);

    },
    getOne: (req, res, next) => {
        const id = req.params.id;

        models.Recipe.find({ _id: id }).populate('author')
            .then((recipe) => res.send(recipe))
            .catch(next);
    },


    post: (req, res, next) => {
        const { title, ingredients, method, serves, cookingTime, prepTime, category } = req.body;
        const { _id } = req.user;

        models.Recipe.create({ title, ingredients, method, serves, cookingTime, prepTime, category, author: _id })
            .then((createdRecipe) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { recipes: createdRecipe } }, { new: true }).populate('recipes'),
                    models.Recipe.findOne({ _id: createdRecipe._id }).populate('author')
                ]);
            })
            .then(([modifiedObj, recipeObj]) => {
                res.send([modifiedObj, recipeObj]);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { _id } = req.user;

        const { title, ingredients, method, serves, cookingTime, prepTime, category } = req.body;
        
        models.Recipe.updateOne({ _id: id }, { title, ingredients, method, serves, cookingTime, prepTime, category })
            .then(() => {
               return models.User.find({_id}).populate('recipes');              
            })
            .then((user) => {
                res.send(user[0])
            })
            .catch(next)       
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Recipe.deleteOne({ _id: id })
            .then((removedRecipe) => res.send(removedRecipe))
            .catch(next)
    }
};