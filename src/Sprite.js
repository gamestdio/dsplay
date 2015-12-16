import * as matrix from './matrix';

export default class Sprite {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.alpha = 1;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.enabled = true;
    this.children = [];
    this.parent = null;
    this.transform = matrix.create();
    this._alpha = 1;
  }

  add(sprite) {
    sprite.remove();
    sprite.parent = this;
    this.children.push(sprite);
  }

  remove(sprite) {
    var index = this.children.indexOf(sprite);
    if (index >= 0) {
      this.children.splice(index, 1);
      sprite.parent = null;
    }
  }

  removeFromParent() {
    if (this.parent) {
      this.parent.remove(this);
    }
  }

  removeChildren() {
    for (var i = 0, len = this.children.length; i < len; i++) {
      this.children[i].parent = null;
    }
    this.children = [];
  }

  render(ctx) {
    if (!this.enabled) {
      return;
    }

    this._alpha = this.alpha;
    matrix.identity(this.transform);
    matrix.rotate(this.transform, this.rotation);
    matrix.scale(this.transform, this.scaleX, this.scaleY);
    matrix.translate(this.transform, this.x, this.y);

    if (this.parent) {
      this._alpha *= this.parent._alpha;
			matrix.multiply(this.transform, this.transform, this.parent.transform);
		}

    ctx.globalAlpha = this._alpha;
    ctx.setTransform(this.transform[0], this.transform[1], this.transform[3], this.transform[4], this.transform[6], this.transform[7]);

    if (this.draw) {
      this.draw(ctx);
    }

    for (var i = 0, len = this.children.length; i < len; i++) {
      this.children[i].render(ctx);
    }
  }
}
