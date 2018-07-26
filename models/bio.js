const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BioSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hometown: { type: Date, required: true },
  height: { type: String, required: true },
  weight: { type: String, required: false },
});

module.exports = mongoose.model('Task', TaskSchema);
