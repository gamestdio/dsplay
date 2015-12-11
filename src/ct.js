var ct = {};

ct.Sprite = require('./Sprite');
ct.Label = require('./Label');

if (window) {
  window.ct = ct;
}

export default ct;
