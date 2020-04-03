import httpStatus from 'http-status';
import model from '../../models/ShoppingCenters.model'
import BaseRepository from '../base.repository';

/**
 * @class ShoppingCentersRepository
 * @extends {BaseRepository}
 */
class ShoppingCentersRepository extends BaseRepository {

    /**
     *Creates an instance of ShoppingCentersRepository.
     * @param {*} module
     * @memberof ShoppingCentersRepository
     */
    constructor(module) {
      super({model , module})
    }
}

export default ShoppingCentersRepository;