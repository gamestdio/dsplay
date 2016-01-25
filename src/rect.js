'use strict';

var rect = {};

rect.create = function(x = 0, y = 0, w = 0, h = 0) {
  return {x:x, y:y, w:w, h:h};
};

export default rect;
