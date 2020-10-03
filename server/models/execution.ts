import * as mongoose from 'mongoose';
const counter = require('./counter');


const executionSchema = new mongoose.Schema({
    _id: String,
    runid: String,
    name: String,
    description: [String],
    agent: String,
    suiteid: String,
    projectid: String,
    schedule: String, //once , daily , weekkly , monthly
    date: Date,
    testcasefilter: [String],
    teststepfilter: [String],
    continueprevexecution: Boolean,
    option: String, // All , Failed
    runby: String,
    status: String //scheduled, running, completed
});

executionSchema.pre('save', function(next) {
  var doc = this;
  if (this.isNew) {
  counter.findByIdAndUpdate({_id: 'Execution'}, {$inc: { seq: 1} }, {new: true, upsert: true},
    function(error, counter)   {
      if(error)
      {
          return next(error);
      }
      doc._id = counter.seq;
      next();
  });
}
});

const Execution = mongoose.model('Execution', executionSchema);
export default Execution;
