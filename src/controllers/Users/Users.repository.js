import httpStatus from 'http-status';
import ApiResponser from '../ApiResponser';
import model from '../../models/Users.model'
import BaseRepository from '../base.repository'
import utils from '../../utils/';
/**
 *
 *
 * @class UsersRepository
 * @extends {BaseRepository}
 */
class UsersRepository extends BaseRepository  {

    /**
     *Creates an instance of UsersRepository.
     * @param {*} module
     * @memberof UsersRepository
     */
    constructor(module) {
        super({model , module})
    }

    edit = async (req) => {
        let { body:data } = req
        let { id }  = req.params

        const password    = utils.getPasswordHash(data.password);
        data.passwordHash     = password
        let result  = await model.findByIdAndUpdate(id, data ,  {new: true} ) ;
  
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.UPDATE_ERROR); 
        return result
    }      
    
}

export default UsersRepository;