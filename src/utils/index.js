import httpStatus from 'http-status';
import Debug from 'debug';
class Utils {

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