export default class Sprite {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.alpha = 1;
    this.rotation = 0;
    this.baseX = 0;
    this.baseY = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.anchorX = 0;
    this.anchorY = 0;
    this.enabled = true;
    this.children = [];
    this.parent = null;
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
    ctx.save();
    ctx.translate(this.x + this.baseX, this.y + this.baseY);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.rotate(this.rotation);
    ctx.globalAlpha *= this.alpha;
    if (this.draw) {
      this.draw(ctx);
    }
    for (var i = 0, len = this.children.length; i < len; i++) {
      this.children[i].render(ctx);
    }
    ctx.restore();
  }
}
