var globby = require('globby');
var log = require('./log').log;
var err = require('./log').err;
var execSync = require('child_process').execSync;
var readFile = require('fs').readFileSync;
var writeFile = require('fs').writeFileSync;
var existsSync = require('fs').existsSync;
var mkdir = require('fs').mkdirSync

function replaceFile(cwd,config) {
  var files = globby.sync([
    `webpack-launch/**/*.*`, // xxx.xx
    `webpack-launch/**/.*.*`, // .eslintrc.js
    `webpack-launch/**/.gitignore` // .gitignore
  ],{cwd : cwd});
  files.map(function (item,index) {
    copyAndReplaceFile(item,index,cwd,config)
  })
  execSync(`rm -rf ${cwd}/webpack-launch`);
}

function copyAndReplaceFile (item,index,cwd,config) {

  var content = readFile(item).toString();

  for(var i in config) {
    var temp = config[i];
    var reg = new RegExp(`\<\%\ *${i}\ *\%\>`,'mg');
    content = content.replace(reg,temp);
  }

  item = item.replace(/webpack-launch\//,'');
  var dirName = item.split('/')

  if(dirName.length > 1) {
    dirName.pop();
    dirName = dirName.join('/');

    if(!existsSync(dirName)) {
      mkdir(dirName,0777);
    }
  }
  try{
    writeFile(item, content,'utf8');
    log(`${cwd}/${item} create down!`);
  }catch(e) {
    err(e)
  }
}

module.exports = replaceFile;
