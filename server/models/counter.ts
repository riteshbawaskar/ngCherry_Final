import * as mongoose from 'mongoose';

var CounterSchema = mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }

});

const counter = mongoose.model('counter', CounterSchema);

export default counter;
