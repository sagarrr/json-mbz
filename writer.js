//requirements

var XMLWriter = require('xml-writer'),
fs = require('fs');

var exports = module.exports = {};

//directories maker

exports.mainwriter = function(){
var dir1 = './exporter/activities';
var dir2 = './exporter/course';
var dir3 = './exporter/sections';

if (!fs.existsSync(dir3)){
    fs.mkdirSync(dir3);
}

if (!fs.existsSync(dir2)){
    fs.mkdirSync(dir2);
}

if (!fs.existsSync(dir1)){
    fs.mkdirSync(dir1);
}

// writer for completion.xml

var ws = fs.createWriteStream(__dirname + '/exporter/completion.xml');
ws.on('close', function() {
   // log output
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {   // set encoding and version
  return 'course_completion';
}).text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {              // add tags
  return '/course_completion>' ;
});
ws.end();

// writer for files.xml
var ws = fs.createWriteStream(__dirname + '/exporter/files.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'files';
}).text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/files>' ;
});
ws.end();

//writer for scales.xml

var ws = fs.createWriteStream(__dirname + '/exporter/scales.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'scales_definition';
}).text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/scales_definition>' ;
});
ws.end();

// writer for questions.xml

var ws = fs.createWriteStream(__dirname + '/exporter/questions.xml');
ws.on('close', function() {
    });
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'question_categories';
}).text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/question_categories>' ;
});
ws.end();

// writer for outcomes.xml

var ws = fs.createWriteStream(__dirname + '/exporter/outcomes.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'outcomes_definition';
}).text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/outcomes_definition>' ;
});
ws.end();

// writer for groups.xml

var ws = fs.createWriteStream(__dirname + '/exporter/groups.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'groups';
}).writeElement('groupings', ' ').text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/groups>' ;
});
ws.end();

// writer for grade_history.xml

var ws = fs.createWriteStream(__dirname + '/exporter/grade_history.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'grade_history';
}).writeElement('grade_grades', ' ').text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/grade_history>' ;
});
ws.end();

// writer for gradebook.xml

var ws = fs.createWriteStream(__dirname + '/exporter/gradebook.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'gradebook';
}).writeElement('attributes', ' ').writeElement('grade_categories', ' ').writeElement('grade_items', ' ').writeElement('grade_letters', ' ').startElement('grade_settings',' ').startElement('grade_setting',' ').writeAttribute('id', ' ').writeElement('name', 'minmaxtouse').writeElement('value', '1').startElement('/grade_setting',' ').startElement('/grade_settings',' ')
.text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/gradebook>' ;
});
ws.end();

// writer for roles.xml

var ws = fs.createWriteStream(__dirname + '/exporter/roles.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'roles_definition';
}).startElement("role","").writeAttribute('id', '5').writeElement("name","").writeElement("shortname","student").writeElement("nameincourse","$@NULL@$").writeElement("description","").writeElement("sortorder","5").writeElement("archetype","student").startElement('/role',' ')
.text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/roles_definition>' ;
});
ws.end();

// moodle_backup.txt file empty?

fs.writeFile('./exporter/moodle_backup.log','', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// writer for course/inforef.xml

var ws = fs.createWriteStream(__dirname + '/exporter/course/inforef.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'inforef';
}).startElement('roleref', ' ').startElement('role', ' ').writeElement("id","5").startElement('/role', ' ').startElement('/roleref', ' ').text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/inforef>' ;
});
ws.end();

// writer for course/roles.XMLWriter

var ws = fs.createWriteStream(__dirname + '/exporter/course/roles.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'roles';
}).writeElement("role_overrides"," ").writeElement("role_assignments"," ").text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/roles>' ;
});
ws.end();

}
