var Promise = require('bluebird');
var users = require('../mocks/users.json');

/**
 * @type {{error: string}}
 */
var error = {error: "error"};

/**
 * @method
 * @description This method use for get all list of users
 * @returns {Promise<*>}
 */
var getAllUsers = async function () {
  return new Promise(function (resolve, reject) {
    resolve(users); //ToDo: remove when the DB implemented
    reject(error);
  });
};


/**
 * @description Export services for use in the controller or routes
 * @type {{getAllUsers: (function(): Promise<*>)}}
 */
module.exports = {
  getAllUsers,
};