import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import timestampMongo from '../utils/timestampMongo';

const BrandsSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    index: true,
    required: true,
  },
  logo: {
    type: String,
    default: null,
  },
  description:{
    type: String,
    required:true
  }, 
},
{ 
  versionKey: false 
}
);

BrandsSchema.plugin(mongoosePaginate);
BrandsSchema.plugin(timestampMongo);

const Brands = mongoose.model('brands', BrandsSchema);
export default Brands;
