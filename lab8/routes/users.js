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

/**
 * @method
 * @description This method use with receive request HTTP POST through middleware from Node.JS and expressJS and
 * response object Request. Use method or verb POST
 * @param req
 * @param res
 * @param next
 */
var createUser = function (req, res, next) {
  userService.createUser(req.body)
    .then((user) => res.status(201).send(user))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive an email request HTTP GET through middleware from Node.JS and expressJS
 * and response object Request. Use method or verb GET
 * @param req
 * @param res
 * @param next
 */
var getUserByEmail = function (req, res, next) {
  userService.getUserByEmail(req.params.email)
    .then((user) => res.status(200).send(user))
    .catch(err => next(err));
}

/**
 * @method
 * @description This method use with receive an email and body request HTTP PUT through middleware
 * from Node.JS and expressJS and response object Request. Use method or verb PUT
 * @param req
 * @param res
 * @param next
 */
var updateUserByEmail = function (req, res, next) {
  userService.updateUserByEmail(req.params.email, req.body)
    .then((user) => res.json(user))
    .catch(err => next(err));
};

/**
 * @method
 * @description This method use with receive an email request HTTP DELETE through middleware
 * from Node.JS and expressJS and response No Content Request. Use method or verb DELETE
 * @param req
 * @param res
 * @param next
 */
var deleteUserByEmail = (req, res, next) => {
  userService.deleteUserByEmail(req.params.email)
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
};

/**
 * @description This definition section is responsible for indicating the methods or verbs that HTTP uses to receive
 * the Request and its respective Response.
 */
router.get('/', getAllUsers);
router.post('/create', createUser);
router.delete('/:email/delete', deleteUserByEmail);
router.put('/:email/update', updateUserByEmail);
router.get('/:email/detail', getUserByEmail);

module.exports = router;