import * as mongoose from 'mongoose';

const IncrementIdSchema = new mongoose.Schema({
    model: { type: String, required: true, index: { unique: true } },
    idx: { type: Number, default: 0 }
});

IncrementIdSchema.static('getNextId', async function(modelName: any, callback): Promise<any> {
    let incr = await this.findOne({ model: modelName });

    if (!incr) { incr = await new this({ model: modelName }).save(); }
    incr.idx++;
    incr.save();
    return incr.idx;
});

const IncrementId = mongoose.model('AutoIncrement', IncrementIdSchema);

export default IncrementId;
