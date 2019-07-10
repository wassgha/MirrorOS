const express = require('express');
const router = express.Router();

const Device = require('../models/Device');
const DeviceHelper = require('../helpers/device_helper');
const CommonHelper = require('../helpers/common_helper');

// Route: /api/v1/device
router.get('/', (req, res, next) => {
  return Device.find({})
    .populate('widgets')
    .then(devices =>
      devices && devices.length > 0
        ? devices
        : DeviceHelper.newDisplay(req).then(() =>
            Device.find({}).populate('widgets')
          )
    )
    .then(devices => {
      return res.json(devices);
    })
    .catch(err => next(err));
});

// Route: /api/v1/device/:id
router
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    return Device.findById(id)
      .populate('widgets')
      .then(device => {
        return res.json(device);
      })
      .catch(err => next(err));
  })
  .get('/:id/widgets', (req, res, next) => {
    const { id } = req.params;
    return Device.findById(id)
      .populate('widgets')
      .then(device => {
        return res.json(device.widgets);
      })
      .catch(err => next(err));
  })
  .patch('/:id', (req, res, next) => {
    const { id } = req.params;
    return Device.findById(id)
      .then(device => {
        if (!device) return next(new Error('Device not found'));

        if ('name' in req.body) device.name = req.body.name;
        if ('layout' in req.body) device.layout = req.body.layout;
        if ('statusBar' in req.body) device.statusBar = req.body.statusBar;

        return device
          .save()
          .then(() => CommonHelper.broadcastUpdate(res.io))
          .then(() => {
            return res.json({ success: true });
          });
      })
      .catch(err => next(err));
  });

module.exports = router;
