#!/usr/bin/env node
const log = require('../log').log;
const program = require('commander');
const pkg = require('../package.json');
const prompt = require('prompt');
const moment = require('moment');
const run = require('../index');
require('colors');

const cwd = process.cwd();
const currentDir = cwd.split('/').pop();

program
  .version(`${pkg.version}`)
  .option('-v, --versions', 'get version of current')
  .parse(process.argv);

if (program.versions) {
  log(pkg.version);
}

prompt.message = `[${pkg.name} ${moment().format('HH:mm:ss')}]`.green;
prompt.delimiter = ' ';

prompt.start();

prompt.get([{
  name: 'NAME',
  description: `项目名称(${currentDir}):`,
  type: 'string',
}, {
  name: 'VERSION',
  description: '当前版本(1.0.0):',
  type: 'string',
}, {
  name: 'AUTHOR',
  description: '作者(空):',
  type: 'string',
}], (err, res) => {
  const result = res;
  result.NAME = result.NAME || currentDir;
  result.VERSION = result.VERSION || '1.0.0';
  result.AUTHOR = result.AUTHOR || '';
  run(result);
});
