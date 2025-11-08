const jwt = require("jsonwebtoken");
const AppError = require('../utils/appError');
const { encryptObject, decryptObject } = require("../utils/encryptDecryptHandler");
const pool = require("../config/db");


module.exports = {

  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    let authToken = req.get("authToken");

    //console.log(authToken);
   
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
          throw new AppError(err?.message ? err.message : `Invalid Token`, 498);
        } else {
          req.decoded = decoded;
          if(authToken != undefined) {
            req.authUser = decryptObject(authToken)
          }
          next();
        }
      });
    } else {
      throw new AppError("Access Denied! Unauthorized Request", 401);
    }
  },

  checkIsAdmin: async (req, res, next) => {
    const authUser = req.authUser;

    //throw new AppError("Access Denied! Unauthorized Request", 401);

    if(authUser != undefined && authUser.type == 'admin') {
      //next();
      const [adminUser] = await pool.query('select * from admins as a where a.id=? and a.status=1', [authUser.id]);

      if(adminUser[0]?.password != authUser?.password) {
        throw new AppError('Password updated, Please login again', 401)
      }

      if(authUser?.env_mode == process.env.NODE_ENV) {
        next();
      } else {
        throw new AppError("Access Denied! Unauthorized Request", 401);
      }
    } else {
      throw new AppError("Access Denied! Unauthorized Request", 401);
    }
  },

  checkIsUser: (req, res, next) => {
    const authUser = req.authUser;

    //console.log(authUser);

    if(authUser != undefined && authUser.type == 'user') {
      //next();
      if(authUser?.env_mode == process.env.NODE_ENV) {
        next();
      } else {
        throw new AppError("Access Denied! Unauthorized Request", 401);
      }
    } else {
      throw new AppError("Access Denied! Unauthorized Request", 401);
    }
  },

};