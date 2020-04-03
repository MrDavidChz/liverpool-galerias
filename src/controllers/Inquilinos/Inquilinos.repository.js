import httpStatus from 'http-status';
import model from '../../models/Inquilinos.model'
import BaseRepository from '../base.repository'
import { log } from '../../utils';
const _ = require('lodash');

/**
 * @class InquilinosRepository
 * @extends {BaseRepository}
 */
class InquilinosRepository extends BaseRepository  {

    /**
     *Creates an instance of InquilinosRepository.
     * @param {*} module
     * @memberof InquilinosRepository
     */
    constructor(module) {
        super({model , module})
    }

    async getAll(){
        let resp = []
        let response =  await model.find({}).populate({
            path:'shop',select:'-_id' , populate: [{path:'brand',select:'-_id -created -updated'}  , {path:'local' ,select:'-_id -created -updated'}]
        });

        if(!response) return this.throwError(httpStatus.OK, false, this.messages.LIST_SUCCESS);
        
        resp =  _.map(response, item => {
            return {
                _id:item._id,
                inquilino:item.name ,
                local:item.shop.local,
                brand : item.shop.brand ,
                phoneLocal : item.shop.phone
            }
        })
        return resp
    }

    async show(id){
        let resp = []
        let response =  await model.findOne({_id:id}).populate({
            path:'shop',select:'-_id' , populate: [{path:'brand',select:'-_id -created -updated'}  , {path:'local' ,select:'-_id -created -updated'}]
        });

        if(!response) return this.throwError(httpStatus.OK, false, this.messages.LIST_SUCCESS);

        return {
            _id         : response._id,
            inquilino   : response.name ,
            local       : response.shop.local,
            brand       : response.shop.brand ,
            phoneLocal  : response.shop.phone
        }
    }    

    edit = async (req) => {
        let { body:data } = req
        let { id }  = req.params
        let result  = await model.findByIdAndUpdate(id,data ,  {new: true} ) ;
  
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.UPDATE_ERROR); 

        return  this.show(id)
      }      
}

export default InquilinosRepository;