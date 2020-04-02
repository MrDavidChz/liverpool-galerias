import httpStatus from 'http-status';
import Debug from 'debug';
class Utils {

}
export default new Utils();

export const log = Debug('express:api', {reloadEnv: true});

export const status = httpStatus;
