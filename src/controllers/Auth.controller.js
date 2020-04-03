import httpStatus from 'http-status';
import ApiResponser from "./ApiResponser"
import UsersModel from '../models/Users.model'
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
const jwtSecret = process.env.JWT_SECRET;

class Auth extends ApiResponser {

  constructor() {
    super('Login');
  }

  login = async (req) => {
    let data = req.body
    let user = await UsersModel.findOne({
      username:data.username
    } ,
    ['_id', 'name', 'username','role' ,'email' ,'created', '+passwordHash']
    )
    if(user){
      if(user.authenticate(data.password, user.passwordHash)){

        return this.sendResponse(httpStatus.OK, true, this.messages.LOGGED_IN_SUCCESS, {
          _id         : user._id,
          user        : user.name ,
          email       : user.email ,
          username    : user.username,
          created     : user.created,
          role        : user.role,
          token       : this.signToken(user),
        });
  
      }


    }
    return this.sendResponse(httpStatus.OK, true, this.messages.INVALID_LOGIN, []);
  }

  /**
   * Returns a jwt token, signed by the app secret
   */
  signToken = user => jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    jwtSecret,
    {
      expiresIn: 60 * 60 * 5,
    },
  );

}

export default new Auth;