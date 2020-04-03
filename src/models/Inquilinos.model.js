import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import timestampMongo from '../utils/timestampMongo';

const InquilinosSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    index: true,
    required: true,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shops' 
  }
},
{ 
  versionKey: false 
},

);
InquilinosSchema.plugin(mongoosePaginate);
InquilinosSchema.plugin(timestampMongo);

const Inquilinos = mongoose.model('inquilinos', InquilinosSchema);
export default Inquilinos;
