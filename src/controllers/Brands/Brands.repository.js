import httpStatus from 'http-status';
import ApiResponser from '../ApiResponser';
import model from '../../models/Brands.model'
import BaseRepository from '../base.repository'

/**
 * @class BrandsRepository
 * @extends {BaseRepository}
 */
class BrandsRepository extends BaseRepository  {

    /**
     *Creates an instance of BrandsRepository.
     * @param {*} module
     * @memberof BrandsRepository
     */
    constructor(module) {
        super({model , module})
    }
}

export default BrandsRepository;