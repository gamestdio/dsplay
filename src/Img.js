import Sprite from './Sprite';
import * as rect from './rect';

export default class Img extends Sprite {
  constructor() {
    super();
    this.element = null;
    this.bounds = rect.create();
    this.frame = rect.create();
  }

  draw(ctx) {
    if (this.element) {
      ctx.drawImage(this.element,
        this.frame.x, this.frame.y, this.frame.w, this.frame.h,
        this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h
      );
    }
  }

  load(url) {
    var img = new Image();
    img.src = url;
    if (img.complete) {
      this._onLoadComplete(img);
    } else {
      img.onload = () => {
        this._onLoadComplete(img);
      };
    }
  }

  _onLoadComplete(img) {
    this.element = img;
    this.bounds.w = img.width;
    this.bounds.h = img.height;
    this.frame.w = img.width;
    this.frame.h = img.height;
  }
}
