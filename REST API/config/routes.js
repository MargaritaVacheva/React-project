const models = require('../models');
const router = require('../routes/');
const utils = require('../utils');
const config = require('../config/config');

module.exports = (app) => {

    app.get('/api/auth', (req, res) => {
        const token = req.cookies[config.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id).populate('recipes'))
            .then(user => {
                return res.status(200).send(user) 
            })
            .catch(() => res.status(401).send('No no no..'));
    });


    app.use('/api/user', router.user);

    app.use('/api/recipe', router.recipe);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};