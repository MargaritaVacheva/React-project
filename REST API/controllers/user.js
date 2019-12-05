const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.User.find()
                .then((users) => res.send(users))
                .catch(next)
        },
        one: (req, res, next) => {
            const id = req.params.id;
            models.User.find({ _id: id})
                .then((user) => res.send(user))
                .catch(next)
        }
    },

    post: {
        register: (req, res, next) => {
            console.log(req.body)
            const { username, email, password } = req.body;
            models.User.create({ username, password, email })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
              .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
              .then(([user, match]) => {
                if (!match) {
                  res.status(401).send('Invalid username or password');
                  return;
                }
      
                const token = utils.jwt.createToken({ id: user._id });
                let {_id, username, email} = user;
                let userInfo = {_id, username, email} ;
                res.cookie(config.authCookieName, token).send(userInfo);
              })
              .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};