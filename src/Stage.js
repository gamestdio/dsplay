import Sprite from './Sprite';

export default class Stage extends Sprite {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.color = '#000000';
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
    this.canvas.style.backgroundColor = value;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    super.render(this.ctx);
  }
}
