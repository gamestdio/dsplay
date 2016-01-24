import Sprite from './Sprite';
import Label from './Label';
import Img from './Img';
import Stage from './Stage';

var dsplay = {};

dsplay.Sprite = Sprite;
dsplay.Label = Label;
dsplay.Img = Img;
dsplay.Stage = Stage;

if (typeof(window) === 'object') {
  window.dsplay = dsplay;
}

module.exports = dsplay;
