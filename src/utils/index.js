import httpStatus from 'http-status';
import Debug from 'debug';
import bcrypt from 'bcrypt'
class Utils {
	getPasswordHash = password => bcrypt.hashSync(password, 10);

	sendError = (res, status, message)=> {
		return res.status(status).json({
			status,
			success:false,
			message: message 
		});
	};	

	handleError = (res, err,statusCode) => {
		let errors = '';
		if (err.errors) {
		  errors = err.errors[Object.keys(err.errors)[0]].message;
		}
		if (!errors && err.message !== '') {
		  errors = err.message;
		}
		console.error(`Error ===> ${errors}`);
		return this.errorWithProperty(res, errors,{status:statusCode || 401 } , statusCode  );
	  };	

	  errorWithProperty = (res, message, response, statusCode) => res
	  .status(statusCode || 200)
	  .send(
		Object.assign(
		  {
			message: message || 'Error',
			success: false,
			data: null,
		  },
		  response,
		),
	  )
	  .end();	  
}
export default new Utils();

export const log = Debug('express:api', {reloadEnv: true});

export const status = httpStatus;

export const controllerHandler = (promise) => async (req, res, next) => {

	try {
	  const result =  await promise(req, res, next);
	  return res.json(result);
	} catch (err) {
	  if (!err.code) {
		err.code = status.BAD_REQUEST;
	  }
	  log(err);
	  return next(err);
	}
  };