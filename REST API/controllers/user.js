const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    get: {
        all: (req, res, next) => {
            models.User.find()
                .then((users) => res.send(users))
                .catch(next)
        },
        one: (req, res, next) => {
            const id = req.params.id;
            models.User.find({ _id: id })
                .then((user) => {
                    if (!user) { res.status(404).send("User Not Found!"); return; }
                    res.send(user);
                })
                .catch(next)
        }
    },

    post: {
        register: (req, res, next) => {
            const { username, email, password } = req.body;
            models.User.create({ username, password, email })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username }).populate('recipes')
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid username or password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    let { _id, username, email } = user;
                    let userInfo = { _id, username, email };
                    res.cookie(config.authCookieName, token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));

            if (token) {
                models.TokenBlacklist.create({ token })
                    .then(() => {
                        res.clearCookie(config.authCookieName).status(200).send('Logout successfully!');
                    })
                    .catch(next);
            } else {
                res.status(401).send('No User. Logout failed!')
            }
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, email } = req.body;

        console.log(id)
        console.log(username, email);
        models.User.findOneAndUpdate({ _id: id }, { username, email }, { new: true })
            .then((updatedUser) => {

                res.send(updatedUser);
            }).catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};


        // if (newPassword && oldPassword) {

        //     models.User.find({ _id: id }).populate('recipes')
        //         .then((user) => {
        //             return !!user ? Promise.all([user, user[0].matchPassword(oldPassword)]) : [null, false]
        //         })
        //         .then(([user, match]) => {
        //             console.log(match);
        //             if (!match) {
        //                 res.status(401).send('Invalid password');
        //                 return;
        //             }

        //             let password = newPassword || oldPassword;
        //             console.log(id)

        //                 bcrypt.genSalt(saltRounds, (err, salt) => {
        //                     bcrypt.hash(password, salt, (err, hash) => {
        //                         if (err) { next(err); return }
        //                         password = hash;
        //                         next();
        //                     })
        //                 })


        //         }).then(([password]) => {

        //             return models.User.findOneAndUpdate({ _id: id }, { username, email, password }, { new: true })
        //         }).then((updatedUser) => {
        //             console.log(updatedUser);
        //             const token = utils.jwt.createToken({ id: updatedUser._id });
        //             res.cookie(config.authCookieName, token).send(updatedUser);
        //         })
        //         .catch(next)

        // }