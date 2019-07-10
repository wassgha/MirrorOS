const Device = require('../models/Device');
const CommonHelper = require('./common_helper');

// function deleteWidgets(widgets, res) {
//   return Promise.all(
//     widgets.map(widget => {
//       return Widget.findByIdAndRemove(widget)
//     })
//   ).then(() => CommonHelper.broadcastUpdate(res.io))
// }

async function newDevice(req) {
  const newDevice = new Device({
    name: req.body.name || 'Mirror OS'
  });
  return newDevice.save();
}

module.exports = {
  // deleteWidgets,
  newDevice
};
