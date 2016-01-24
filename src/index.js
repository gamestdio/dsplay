import Renderer from './Renderer';
import Sprite from './Sprite';
import Label from './Label';
import Img from './Img';

var dsplay = {};

dsplay.Renderer = Renderer;
dsplay.Sprite = Sprite;
dsplay.Label = Label;
dsplay.Img = Img;

if (typeof(window) === 'object') {
  window.dsplay = dsplay;
}

module.exports = dsplay;
