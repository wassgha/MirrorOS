const mongoose = require('mongoose');
const widgetList = require('../../widgets/list');
const Schema = mongoose.Schema;

const Widget = new Schema({
  type: { type: String, enum: widgetList },
  data: { type: Schema.Types.Mixed }
});

module.exports = mongoose.model('Widget', Widget);
