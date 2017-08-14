#!/usr/bin/env node
var log = require('../log').log;
var program = require('commander');
var pkg = require('../package.json');
var prompt = require('prompt');
var moment = require('moment');
var run = require('../index');
var cwd = process.cwd();
var currentDir = cwd.split('/').pop();
require('colors')

program
  .version(`${pkg.version}`)
  .option(`-v, --versions`,'get version of current')
  .parse(process.argv);

if(program.versions) {
  log(pkg.version);
}

prompt.message = `[${pkg.name} ${moment().format('HH:mm:ss')}]`.green;
prompt.delimiter = ' ';

prompt.start();

prompt.get([{
  name : 'NAME',
  description : '项目名称(' + currentDir + '):',
  type : 'string'
},{
  name : 'VERSION',
  description : '当前版本(1.0.0):',
  type : 'string'
},{
  name : 'AUTHOR',
  description : '作者(空):',
  type : 'string'
}], function (err, result) {
  result.NAME = result.NAME || currentDir;
  result.VERSION = result.VERSION || '1.0.0';
  result.AUTHOR = result.AUTHOR  || '';
  run(result)
})
