var tar = require('tar-fs');
var fs = require('fs');
var exports = module.exports = {};

exports.maincompressor = function(){
tar.pack(__dirname + '/semi_converted_file').pipe(fs.createWriteStream(__dirname + '/moodle_backup.tar'))
}
