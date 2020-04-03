import httpStatus from 'http-status';
import ApiResponser from "../ApiResponser"
import InquilinosRepo from "./Inquilinos.repository"
/**
 * @class Brands
 * @extends {ApiResponser}
 */
class Brands extends ApiResponser {

  /**
   *Creates an instance of Brands.
   * @memberof Brands
   */
  constructor() {
    const module = 'Inquilino'
    super(module);
    this.module = new InquilinosRepo(module)
  }

  getAll = async () => {
    let response = await this.module.getAll()
    return this.sendResponse(httpStatus.OK, true, this.messages.LIST_SUCCESS, response);
  }

  create = async (req) => {
    let response = await this.module.create(req)
    return this.sendResponse(httpStatus.OK, true, this.messages.INSERT_SUCCESS, response);
  }


  show = async (req) => {
    let {id}        = req.params
    let response    = await this.module.show(id)
    return this.sendResponse(httpStatus.OK, true, this.messages.SHOW_SUCCESS, response);
  }


  edit = async (req) => {
    let response = await this.module.edit(req)
    return this.sendResponse(httpStatus.OK, true, this.messages.UPDATE_SUCCESS, response);
  }

  delete = async (req) => {
    let response = await this.module.delete(req)
    return this.sendResponse(httpStatus.OK, true, this.messages.DELETE_SUCCESS, response);
  }

}

export default new Brands;