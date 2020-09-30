import * as mongoose from 'mongoose';

const stepSchema = new mongoose.Schema({
_id: String,
testcaseid: String,
seqid: String,
name: String,
action: String,
input: [{key: String, value: String}],
validation: [{key: String, value: String}],
tags: [String],
active: Boolean
});
