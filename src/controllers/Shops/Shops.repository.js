// Utility to interact with HTTP status code.
import httpStatus from 'http-status';
import model from '../../models/Shops.model';
import BaseRepository from '../base.repository';

/**
 *
 *
 * @class ShopsRepository
 * @extends {BaseRepository}
 */
class ShopsRepository extends BaseRepository {

    /**
     *Creates an instance of ShopsRepository.
     * @param {*} module
     * @memberof ShopsRepository
     */
    constructor(module) {
        super({model , module})
    }
 
    getAll = async (data) => {
      let result = await model.find({},["phone" , "created" ]).populate( [{ path :'local' ,select:'NoLocal piso -_id' } , { path :'brand' , select :'logo name -_id' } ])
      if (result) {
          return result
      } else {
        return this.throwError(httpStatus.OK, false, this.messages.NOT_FOUND);  
      }
            
    }

  
    show = async (id) => {
      let result = await model.findById(id , ).populate( [{ path :'local' ,select:'NoLocal piso -_id' } , { path :'brand' , select :'logo name -_id' } ]);
      if (!result) return this.throwError(httpStatus.OK, false, this.messages.NOT_FOUND);  
        
      return result
    }

    edit = async (req) => {
      let { body:data } = req
      let { id }  = req.params
      let result  = await model.findByIdAndUpdate(id,data ,  {new: true} ) ;

      if (!result) return this.throwError(httpStatus.OK, false, this.messages.UPDATE_ERROR); 

      result  = this.show(id)
      return result
    }  

}

export default ShopsRepository;