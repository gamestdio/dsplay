var CS = {};

CS.Sprite = require('./Sprite');
CS.Label = require('./Label');
CS.Img = require('./Img');
CS.Rect = require('./Rect');
CS.Stage = require('./Stage');

if (window) {
  window.CS = CS;
}

export default CS;
