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
 * @method
 * @param userParam
 * @description This method use for create user, and receive userParam object
 * @returns {Promise}
 */
var createUser = async function (userParam) {
  return new Promise(function (resolve, reject) {
    resolve(users[0]); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @description This method use for get user by email, and receive email object
 * @param email
 * @returns {Promise<*>}
 */
var getUserByEmail = async function (email) {
  return new Promise(function (resolve, reject) {
    resolve(users[0]);
    reject(error);
  });
};

/**
 * @description Export services for use in the controller or routes
 * @type {{getUserByEmail: (function(*): Promise<*>),
 * getAllUsers: (function(): Promise<*>), createUser: (function(*): Promise<*>)}}
 */
module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail
};