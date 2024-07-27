var express = require('express');
var router = express.Router();
var userService = require('../services/users');

/**
 * @method
 * @description This method use with receive request HTTP GET through middleware from Node.JS and expressJS and response
 * object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getAllUsers = function (req, res, next) {
  userService.getAllUsers()
    .then(users => res.json(users))
    .catch(err => next(err));
};

// routes
router.get('/', getAllUsers);

module.exports = router;