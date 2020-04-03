import httpStatus from 'http-status';
import model from '../../models/Locals.model'
import BaseRepository from '../base.repository';

/**
 * @class LocalsRepository
 * @extends {BaseRepository}
 */
class LocalsRepository extends BaseRepository {

    /**
     *Creates an instance of LocalsRepository.
     * @param {*} module
     * @memberof LocalsRepository
     */
    constructor(module) {
      super({model , module})
    }
    
    getAll = async (data) => {

      let result = await model.find({},["piso" ,"NoLocal" , "dimensions" , "created" ]).populate({  path :'shopping_center' , select:'name direction'})
      if(!result)  return this.throwError(httpStatus.OK, false, this.messages.NOT_FOUND);  
      return result
    }
 
    show = async (req) => {
      let { id } = req.params
      let result = await model.findById(id).populate({  path :'shopping_center' , select:'name direction'});
      if (!result) return this.throwError(httpStatus.OK, false, this.messages.NOT_FOUND);  
      return result;
    }

}

export default LocalsRepository;