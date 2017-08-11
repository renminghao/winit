var spawn = require('child_process').spawn;
var log = require('./log').log;

function install () {
  var npmInstall = spawn('tnpm',['install']);
	npmInstall.stdout.on('data', function (data){
		log(data.toString());
	})
	npmInstall.stderr.on('data', function (data){
		log(data.toString());
	})
	npmInstall.on('exit', function (code) {
		if(!code) {
			log(`依赖安装完成`);
			log(`npm run dev进行开发`)
			log(`npm run eslint进行语法检查`)
			log(`npm run build 进行代码构建`)
		}
	})
}

module.exports = install;
