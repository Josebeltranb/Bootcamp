var Promise = require('bluebird');
var users = require('../mocks/users.json');

var jwt = require('jsonwebtoken');
var config = require('../middlewares/config.json');

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
    var user = {
      id: users[0].id,
      email: email,
      firstname: users[0].firstname,
      lastname: users[0].lastname,
      phone: users[0].phone,
      status: users[0].status
    };
    resolve(user); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @description This method use for update user by email, and receive email object
 * @param email
 * @param userParam
 * @returns {Promise<*>}
 */
var updateUserByEmail = async function (email, userParam) {
  return new Promise(function (resolve, reject) {
    //ToDo: remove when the DB implemented
    var userUpdate = {};
    userUpdate.email = email;
    userUpdate.firstname = userParam.firstname;
    userUpdate.lastname = userParam.lastname;
    userUpdate.phone = userParam.phone;
    userUpdate.id = users[0].id;
    userUpdate.status = users[0].status;

    resolve(userUpdate);
    reject(error);
  });
};

/**
 * @method
 * @description This method use for delete user by email
 * @param email
 * @returns {Promise<*>}
 */
var deleteUserByEmail = async function (email) {
  return new Promise((resolve, reject) => {
    resolve(); //ToDo: remove when the DB implemented
    reject(error);
  });
};

/**
 * @method
 * @description This method use for sign user by email and password
 * @param email
 * @param password
 * @returns {Promise}
 */
var authenticate = async ({email, password}) => {
  return new Promise((resolve, reject) => {
    var userAuth = users[0]; //ToDo: remove when the DB implemented
    userAuth.token = jwt.sign(
      {
        sub:
          {
            email: email,
            firstname: userAuth.firstname,
            lastname: userAuth.lastname,
            locale: 'CO',
            roles: {
              is_admin: true,
              is_user: true
            }
          }
      },
      config.secret,
      {expiresIn: '1m'}
    );

    resolve(userAuth);
  });
};

/**
 * @description Export services for use in the controller or routes * @type {{getUserByEmail: (function(*): Promise),
 * getAllUsers: (function(): Promise),
 * authenticate: (function({email: *, password: *}): Promise),
 * createUser: (function(*): Promise),
 * deleteUserByEmail: (function(*): Promise),
 * updateUserByEmail: (function(*, *): Promise)}}
 */
module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
  authenticate
};