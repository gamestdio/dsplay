import Sprite from './Sprite';

export default class Label extends Sprite {
  constructor() {
    super();
    this.size = 20;
    this.family = 'Arial';
    this.weight = 'normal';
    this.color = '#000000';
    this.baseline = 'top';
    this.align = 'left';
    this.lineSpace = undefined;
    this._text = '';
    this._lines = [];
  }

  get text() {
    return this._text;
  }

  set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._lines = this._text.split('\n');
      this._multiline = this._lines.length > 0;
    }
  }

  draw(ctx) {
    ctx.font = `${this.weight} ${this.size}pt ${this.family}`;
    ctx.textBaseline = this.baseline;
    ctx.textAlign = this.align;
    ctx.fillStyle = this.color;

    if (this._multiline) {
      for (var i = 0, l = this._lines.length; i < l; i++) {
        var sp = this.lineSpace !== undefined ? this.lineSpace : this.size + 8;
        ctx.fillText(this._lines[i], 0, i*sp);
      }
    } else {
      ctx.fillText(this._text, 0, 0);
    }

  }
}
