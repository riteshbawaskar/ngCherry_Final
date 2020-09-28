import * as mongoose from 'mongoose';
import * as IncrementId from './IncrementId';

const SuiteSchema = new mongoose.Schema({
  suiteid: { type: Number, unique: true, trim: true },
  name: String,
  description: String,
  group: Boolean,
  projectid: [String]
});

const Suite = mongoose.model('Suite', SuiteSchema);

SuiteSchema.pre('save', function(next): void {
  if (this.isNew) {
      const id =  IncrementId.default.getNextId('Suite');
      this.id = id; // Incremented
      next();
  } else {
      next();
  }
});

export default Project;

