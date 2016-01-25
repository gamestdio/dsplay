'use strict';

var mat3 = {};

mat3.create = function() {
  var matrix = new Float32Array(9);
  mat3.identity(matrix);
  return matrix;
};

mat3.identity = function(matrix) {
  matrix[0] = 1;
  matrix[1] = 0;
  matrix[2] = 0;
  matrix[3] = 0;
  matrix[4] = 1;
  matrix[5] = 0;
  matrix[6] = 0;
  matrix[7] = 0;
  matrix[8] = 1;
};

mat3.copy = function(target, source) {
  for (var i in source) {
    target[i] = source[i];
  }
};

mat3.multiply = function(matrix, a, b) {
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a10 = a[3];
  var a11 = a[4];
  var a12 = a[5];
  var a20 = a[6];
  var a21 = a[7];
  var a22 = a[8];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b10 = b[3];
  var b11 = b[4];
  var b12 = b[5];
  var b20 = b[6];
  var b21 = b[7];
  var b22 = b[8];

  matrix[0] = a00 * b00 + a01 * b10 + a02 * b20;
  matrix[1] = a00 * b01 + a01 * b11 + a02 * b21;
  matrix[2] = a00 * b02 + a01 * b12 + a02 * b22;
  matrix[3] = a10 * b00 + a11 * b10 + a12 * b20;
  matrix[4] = a10 * b01 + a11 * b11 + a12 * b21;
  matrix[5] = a10 * b02 + a11 * b12 + a12 * b22;
  matrix[6] = a20 * b00 + a21 * b10 + a22 * b20;
  matrix[7] = a20 * b01 + a21 * b11 + a22 * b21;
  matrix[8] = a20 * b02 + a21 * b12 + a22 * b22;
};

mat3.translate = function(matrix, x, y) {
  matrix[6] += x;
  matrix[7] += y;
};

mat3.scale = function(matrix, x, y) {
  matrix[0] *= x;
  matrix[4] *= y;
  matrix[3] *= x;
  matrix[1] *= y;
  matrix[6] *= x;
  matrix[7] *= y;
};

mat3.rotate = function(matrix, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);

  var a1 = matrix[0];
  var c1 = matrix[3];
  var tx1 = matrix[6];

  matrix[0] = a1 * cos-matrix[1] * sin;
  matrix[1] = a1 * sin+matrix[1] * cos;
  matrix[3] = c1 * cos-matrix[4] * sin;
  matrix[4] = c1 * sin+matrix[4] * cos;
  matrix[6] = tx1 * cos - matrix[7] * sin;
  matrix[7] = tx1 * sin + matrix[7] * cos;
};

export default mat3;
