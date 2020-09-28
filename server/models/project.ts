import * as mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, unique: true, trim: true },
  description: String,
  active:boolean,
  componentlib: [String]
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

