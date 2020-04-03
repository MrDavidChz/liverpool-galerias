import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import timestampMongo from '../utils/timestampMongo';

const LocalsSchema = new mongoose.Schema({
  NoLocal: {
    type: String,
    maxlength: 50,
    index: true,
    required: true,
  },
  shopping_center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'shopping_centers',
  },
  dimensions:{
    type: String,
    maxlength: 50,
    required:true
  }, 
  piso:{
    type: String,
    enum: ['Piso 1', 'Piso 2', 'Piso 3' , 'Piso 4' , 'Piso 5' , 'Piso 6' ,'Piso 7','Piso 8'],
  }, 
},
{ 
  versionKey: false 
}
);

LocalsSchema.plugin(mongoosePaginate);
LocalsSchema.plugin(timestampMongo);

const Locals = mongoose.model('locals', LocalsSchema);
export default Locals;
