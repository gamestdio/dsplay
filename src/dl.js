var dl = {};

dl.Sprite = require('./Sprite');
dl.Label = require('./Label');
dl.Img = require('./Img');
dl.Rect = require('./Rect');

if (window) {
  window.dl = dl;
}

export default dl;
