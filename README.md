# DSPLAY

[![Greenkeeper badge](https://badges.greenkeeper.io/gamestdio/dsplay.svg)](https://greenkeeper.io/)

A simple display list for canvas 2D.

### HTML Setup
- Download:
- Include: `<script src="dsplay.min.js" charset="utf-8"></script>`

### Node/Browserify Setup
- Install: `npm install dsplay`
- Include: `var dsplay = require('dsplay');`

### Usage
```javascript
// Everything starts with a Renderer and a Sprite:
var renderer = new dsplay.Renderer(canvas);
var container = new dsplay.Sprite();

// Sprites are just transform entities, so you need to draw stuff by yourself:
var box = new dsplay.Sprite();
container.add(box);
box.draw = (ctx) => {
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, 64, 64);
}

// Render loop:
render();
function render() {
  renderer.render(container);
  requestAnimationFrame(render);
}

// Also, there are some useful sprite-based objects, like Img:
var img = new dsplay.Img();
container.add(img);
img.y = 80;
img.load('https://goo.gl/QHEIDK');

// And Label:
var label = new dsplay.Label();
container.add(label);
label.x = 80;
label.color = '#FFFFFF';
label.text = 'Hello world!';
```
