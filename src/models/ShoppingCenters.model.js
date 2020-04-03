import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import timestampMongo from '../utils/timestampMongo';

const ShoppingCentersSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    index: true,
    required: true,
  },
  direction: {
    type: String,
    maxlength: 250,
    required: true,
  },
  phone:{
    type: Number,
    maxlength:10,
    minlength:10,
    required:true
  },
  opening_hours: {
    type: String,
    maxlength: 50,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Active', 'In Active'],
    default: 'Pending',
  },  
},
{ 
  versionKey: false 
});

ShoppingCentersSchema.plugin(mongoosePaginate);
ShoppingCentersSchema.plugin(timestampMongo);

const ShoppingCenters = mongoose.model('shopping_centers', ShoppingCentersSchema);
export default ShoppingCenters;
