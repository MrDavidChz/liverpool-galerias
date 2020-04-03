import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import timestamps from '../utils/timestampMongo';
const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
      default: '',
      index: true,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
      default: '',
      index: true,
    },    
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      maxlength: 50,
    },
    role:{
      type: String,
      enum: ['ADMIN', 'INQUILINO'],
      required: true,
    },     
    passwordHash: {
      type: String,
      select: false,
    },
  },
  { 
    versionKey: false 
  }
);

/**
 * Virtuals
 */

UsersSchema.virtual('password')
  .set(function(password) {
    this.upassword = password;
    this.passwordHash = this.getPasswordHash(password);
  })
  .get(function() {
    return this.upassword;
  });

/**
 * Methods
 */

UsersSchema.methods = {
  /**
	 * Authenticate
	 *
	 * @param {String} password
	 * @return {Boolean}
	 */
  authenticate(password, hash) {
    return bcrypt.compareSync(password, hash);
  },
  getPasswordHash(password) {
    return bcrypt.hashSync(password, 10);
  },
};



UsersSchema.path('email').validate({
  isAsync: true,
  validator(value, respond) {
    const self = this;
    this.constructor.findOne(
      {
        email: value,
      },
      (err, user) => {
        if (err) {
          throw err;
        }
        if (user) {
          if (self.id === user.id) {
            respond(true);
          }
          respond(false);
        }
        respond(true);
      },
    );
  },
  message: 'The email you entered is already in our system.',
});


UsersSchema.path('username').validate({
  isAsync: true,
  validator(value, respond) {
    const self = this;
    this.constructor.findOne(
      {
        username: value,
      },
      (err, user) => {
        if (err) {
          throw err;
        }
        if (user) {
          if (self.id === user.id) {
            respond(true);
          }
          respond(false);
        }
        respond(true);
      },
    );
  },
  message: 'The username you entered is already in our system.',
});

UsersSchema.plugin(timestamps, { index: true });

const User = mongoose.model('users', UsersSchema);

export default User;
