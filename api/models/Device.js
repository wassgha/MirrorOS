const mongoose = require('mongoose');
const themeList = require('../../themes/list');

const Schema = mongoose.Schema;

const Device = new Schema({
  name: { type: String },
  theme: { type: String, default: themeList[0], enum: themeList },
  home: {
    type: [{ item: String, position: String }],
    default: () => [{ item: 'datetime', position: 'center' }]
  },
  location: { type: String },
  locale: { type: String },
  timezone: { type: String }
});

module.exports = mongoose.model('Device', Device);
