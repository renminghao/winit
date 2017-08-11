var execSync = require('child_process').execSync;

function clone (){
  execSync('git clone git@github.com:renminghao/webpack-launch.git');
}

module.exports = clone
