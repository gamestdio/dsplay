import path from 'path';
import fs from 'fs-extra';
import shell from 'shelljs';

var taskname = process.argv[2] || 'release';
var taskmap = {
  'release': release,
  'dev': dev
}
run(taskmap[taskname]);

async function release() {
  await run(clean);
  await run(js);
}

async function dev() {
  await run(clean);
  await run(watch);
}

async function clean() {
  shell.exec('find . -name \'*.DS_Store\' -type f -delete');
}

async function js() {
  var cmd = 'browserify src/index.js -s CS -t [babelify --stage 0] | uglifyjs -mc > canvas-sprites.min.js';
  shell.exec(cmd);
}

async function watch() {
  var cmdJs = 'watchify src/index.js -s CS -t [babelify --stage 0] -o canvas-sprites.js -d -v';
  var cmdServer = 'http-server . -p 8080 -s';
  shell.exec(`${cmdJs} & ${cmdServer}`, {async:true});
}

// TOOLS -------------------------------------------------

function forEach(dir, fn) {
  let list = fs.readdirSync(dir);
  for (let i in list) {
    let n = list[i];
    if (n.match('DS_Store')) {
      continue;
    }
    let p = path.join(dir, n);
    fn(n, p, i);
  }
}

function log(msg) {
  console.log('[tasks]', msg);
}

function getTime() {
  var d = new Date();
  return d.getTime();
}

async function run(fn) {
  const start = getTime();
  log(`${fn.name} - start`);
  await fn();
  const time = getTime() - start;
  log(`${fn.name} - finish after ${time} ms`);
}
