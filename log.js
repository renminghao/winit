var pkg = require('./package.json');
var moment = require('moment');

function log(content) {
	var name = pkg.name;
	console.log(`[${name} ${moment().format('HH:mm:ss')}]`.green,content)
}

function err(content) {
	var name = pkg.name;
	console.log(`[${name} ${moment().format('HH:mm:ss')}]`.red,content)
}

module.exports = {
	log: log,
	err : err
}
