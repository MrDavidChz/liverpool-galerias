import ApiResponser from "./ApiResponser";
import httpStatus from 'http-status';
class BaseRepository extends ApiResponser {

    constructor(data) {
        const { model, module } = data
        super(module)
        this.model = model;

    }

    async getAll() {
        let result = await this.model.find({});
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.LIST_SUCCESS);
        return result
    }

    async create(req) {
        let { body: data } = req
        let result = await this.model.create(data);
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.INSERT_ERROR);
        return result
    }
    async show(req) {
        let { id } = req.params
        let result = await this.model.findById(id);
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.NOT_FOUND);
        return result
    }

    async edit(req) {
        let { body: data } = req
        let { id } = req.params
        let result = await this.model.findByIdAndUpdate(id, data, { new: true });
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.UPDATE_ERROR);

    }

    async delete(req) {
        let { id: _id } = req.params
        let result = await this.model.findOneAndDelete({ _id });
        if (!result) return this.throwError(httpStatus.OK, false, this.messages.DELETE_ERROR);
    }

}
export default BaseRepository;