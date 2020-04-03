import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import timestampMongo from '../utils/timestampMongo';

const ShopsSchema = new mongoose.Schema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'brands',
  },
  local: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'locals',
  },
  phone:{
    type: Number,
    maxlength:10,
    minlength:10,
    required:true
  },
},
{ 
  versionKey: false 
}
);

ShopsSchema.plugin(mongoosePaginate);
ShopsSchema.plugin(timestampMongo);

const Shops = mongoose.model('shops', ShopsSchema);
export default Shops;
