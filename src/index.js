import Sprite from './Sprite';
import Label from './Label';
import Img from './Img';
import Stage from './Stage';

var CS = {};

CS.Sprite = Sprite;
CS.Label = Label;
CS.Img = Img;
CS.Stage = Stage;

if (typeof(window) === 'object') {
  window.CS = CS;
}

module.exports = CS;
