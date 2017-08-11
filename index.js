var cwd = process.cwd();
var execSync = require('child_process').execSync;
var pkg = require('./package.json');
var replaceFile = require('./replaceFile');
var log = require('./log').log;
var err = require('./log').err;
var clone = require('./gitClone');
var install = require('./installModule')
require('colors')

module.exports = function (config){
	try {
		log(`获取远程文件...`);
		clone(config);
		log(`开始创建本地文件...`);
		replaceFile(cwd,config);
		log(`开始安装依赖...`)
		install();
	}catch(e) {
		err(e)
		execSync(`rm -rf ${cwd}/webpack-launch`)
	}

}
