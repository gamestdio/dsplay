import Sprite from './Sprite';

var defaultOptions = {
  antialias: true,
  color: '#000000'
};

export default class Stage extends Sprite {
  constructor(canvas, options = defaultOptions) {
    super();
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = options.antialias;
  	this.ctx.mozImageSmoothingEnabled = options.antialias;
    this.color = options.color;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
    this.canvas.style.backgroundColor = value;
  }

  render() {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    super.render(this.ctx);
    this.ctx.restore();
  }
}
