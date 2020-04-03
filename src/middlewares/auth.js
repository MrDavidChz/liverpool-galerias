/* eslint consistent-return: ["off"], prefer-destructuring: ["off"] */

import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import compose from 'composable-middleware';
import User from '../models/Users.model';
import utils, { status ,log } from '../utils';
import moment from 'moment'
const jwtSecret = process.env.JWT_SECRET;

const validateJwt = expressJwt({
  secret: jwtSecret,
});

class AuthService {
  /**
   * Attach the user object to the request if user is valid and authorized
   * Otherwise returns error
   */
  checkRole = () => compose()
    .use(validateJwt)
    .use((err, req, res, next) => {
      if (err) {
        return res.status(status.UNAUTHORIZED).json({
          success: false,
          message: 'You are not authorized to perform this operation.',
        });
      }
      next();
    })
    .use( async (req, res, next) => {
        let user = await User.findOne({
            _id:req.user.id,
            role:'INQUILINO'
        });
        log(user)
        if(user) return utils.sendError(res, status.UNAUTHORIZED ,'You are not authorized to perform this operation!',);

      next();
    });

    isAuth = async (req, res, next) => {
        try {
         
          if (!req.headers.authorization)  return utils.sendError(res, status.UNAUTHORIZED ,'You are not authorized to perform this operation.',);
          const token   = req.headers.authorization.split(' ')[1]
          const payload = await jwt.verify(token, jwtSecret)
    
          if (!payload) return utils.sendError(res, status.UNAUTHORIZED , 'Token invalid');
    
          if (payload.exp <= moment().unix())  return utils.sendError(res, status.UNAUTHORIZED , 'Session finished');
    
          req.user = payload
          next()
        } catch (err) {
          return utils.handleError(res,err,status.Forbidden); 
        }
      }

}

export default new AuthService();
