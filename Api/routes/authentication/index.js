/*
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var express = require('express');
var router = express.Router();
var User = require('../../models/user.js');
// secret
var config = require('../../config/secret.js');
var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');

var UserTokenData = "";


module.exports = function () {

    router.route('/IMMO/authenticate')

        .post(function (req, res, next) {
            var errors = req.validationErrors();
            if (errors) return res.status(400).send(errors);

            User.findOne({ "local.Email": req.body.Email }, function (err, user) {
                if (!user) return res.status(401).send({ msg: 'The email address ' + req.body.Email + ' is not associated with any account. Double-check your email address and try again.' });

                if (!user.validPassword(req.body.Password)) {
                    return res.status(403).send({ success: false, message: 'Incorrect password.' });
                };


                if (!user.local.isVerified) return res.status(401).send({ type: 'not-verified', msg: 'Your account has not been verified.' });


                var userData = { "Firstname": user.local.Firstname, "Lastname": user.local.Lastname, "Role": user.Role, "Email": user.local.Email, };
                var token = jwt.sign(userData, config.secret.value, { expiresIn: 3600 /* expires in 1 minute  *//* });

/*UserTokenData = { "token": token };

                res.json(UserTokenData);



            });




        });



    return router;
}
*/