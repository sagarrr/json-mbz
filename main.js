var fs = require('fs');
var XMLWriter = require('xml-writer');
var file = __dirname + '/first.json';
var compressor = require("./compression.js")
var writer1 = require("./writer.js");

var dir11 = "./semi_converted_file"

if (!fs.existsSync(dir11)){
    fs.mkdirSync(dir11);
}

 writer1.mainwriter();

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
  obj_pulseconfig = JSON.parse(data);
  var i;
  var len = obj_pulseconfig.data.sessions.length;


  // activites label folder maker

  for(i=0;i<len;i++){
    var dir1 = "./semi_converted_file/activities/label_" + (i+2);
    var dir2 = "./semi_converted_file/sections/section_" + (i+12);
    if (!fs.existsSync(dir1)){
        fs.mkdirSync(dir1);
    }
    if (!fs.existsSync(dir2)){
        fs.mkdirSync(dir2);
    }
}

// moodle_backup.XML

var ws = fs.createWriteStream(__dirname + '/semi_converted_file/moodle_backup.xml');
ws.on('close', function() {
   // log output
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {   // set encoding and version
  return 'moodle_backup';
}).startElement('information',' ').writeElement("name","backup-moodle2-course-3-cs101-20180625-0537-nu.mbz").writeElement("moodle_version","2016052312.01").writeElement("moodle_release","3.1.12+ (Build: 20180524)")
.writeElement("backup_version","2016052300").writeElement("backup_release","3.1").writeElement("backup_date","1529901456").writeElement("mnet_remoteusers","0").writeElement("include_files","1")
.writeElement("include_file_references_to_external_content","0").writeElement("original_wwwroot","http://localhost/moodle").writeElement("original_site_identifier_hash","7d85aaa10bd33c790bf1be8b7fa8ad83").writeElement("original_course_id","3")
.writeElement("include_file_references_to_external_content","weeks").writeElement("original_course_fullname",obj_pulseconfig.data.course.title).writeElement("original_course_shortname",obj_pulseconfig.courseId)
.writeElement("original_course_startdate","1529708400").writeElement("original_course_contextid","36").writeElement("original_system_contextid","2").startElement('details', ' ').startElement('detail', ' ').writeAttribute('backup_id', "4ec4fa7b768da4bb4123999b83fce898")
.writeElement('type', "course").writeElement('format', "moodle2").writeElement('interactive', "1").writeElement('mode', "10").writeElement('execution',"1").writeElement('executiontime', "0").startElement('/detail', ' ').startElement('/details', ' ')
.startElement('contents', ' ').startElement('activities', ' ')
for(i=0;i<len-1;i++){
  var x=i+2;
  xw.startElement('activity', ' ').writeElement('moduleid', x).writeElement('sectionid', i+13).writeElement('modulename', "label").writeElement('title', obj_pulseconfig.data.sessions[i].objective).writeElement('directory', "activities/label_" + x).startElement('/activity', ' ')
}
xw.startElement('/activities', ' ').startElement('sections', ' ').startElement('section', ' ').writeElement('sectionid', '12').writeElement('title', '0').writeElement('directory', 'sections/section_12').startElement('/section', ' ')
for(i=0;i<len-1;i++){
  var x = i+13;
  xw.startElement('section', ' ').writeElement('sectionid', i+13).writeElement('title', obj_pulseconfig.data.sessions[i].topic).writeElement('directory', 'sections/section_' + x).startElement('/section', ' ')
}
xw.startElement('/sections', ' ').startElement('course', ' ').writeElement('courseid', "3").writeElement('title', obj_pulseconfig.courseId).writeElement('directory', "course").startElement('/course', ' ').startElement('/contents', ' ')
.startElement('settings', ' ').startElement('setting', ' ').writeElement('level', "root").writeElement('name', "filename").writeElement('value', "semi_converted_file").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "imscc11").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "users").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "anonymize").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "role_assignments").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "activities").writeElement('value', "1").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "blocks").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "filters").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "comments").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "badges").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "calenderevents").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "logs").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "grade_histories").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "questionbank").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "groups").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "root").writeElement('name', "competencies").writeElement('value', "0").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "section").writeElement('section', "section_12").writeElement('name', "section_12_included").writeElement('value', "1").startElement('/setting', ' ')
.startElement('setting', ' ').writeElement('level', "section").writeElement('section', "section_12").writeElement('name', "section_12_userinfo").writeElement('value', "0").startElement('/setting', ' ')
for(i=0;i<len-1;i++){
  var x = i+13;
  var y = i+2;
  xw.startElement('setting', ' ').writeElement('level', "section").writeElement('section', "section_" + x).writeElement('name', "section_" + x + "_included").writeElement('value', "1").startElement('/setting', ' ')
  .startElement('setting', ' ').writeElement('level', "section").writeElement('section', "section_" + x).writeElement('name', "section_" + x + "_userinfo").writeElement('value', "0").startElement('/setting', ' ')
  .startElement('setting', ' ').writeElement('level', "activity").writeElement('activity', "label_" + y).writeElement('name', "label_" + y + "_included").writeElement('value', "1").startElement('/setting', ' ')
  .startElement('setting', ' ').writeElement('level', "activity").writeElement('activity', "label_" + y).writeElement('name', "label_" + y + "_userinfo").writeElement('value', "0").startElement('/setting', ' ')
}
xw.startElement('/settings', ' ').startElement('/information',' ').text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {              // add tags
  return '/moodle_backup>' ;
});
ws.end();

//

// grade_history.xml for every label

for(i=0;i<len;i++){
  var dir1 = "/semi_converted_file/activities/label_" + (i+2);
  var ws = fs.createWriteStream(__dirname +  dir1 + '/grade_history.xml');
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
}

// grades.xml for every label

for(i=0;i<len;i++){
  var dir1 = "/semi_converted_file/activities/label_" + (i+2);
  var ws = fs.createWriteStream(__dirname +  dir1 + '/grades.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'activity_gradebook';
  }).writeElement('grade_items', ' ').writeElement('grade_letters', ' ').text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/activity_gradebook>' ;
  });
  ws.end();
}

// inforef.xml for every label

for(i=0;i<len;i++){
  var dir1 = "/semi_converted_file/activities/label_" + (i+2);
  var ws = fs.createWriteStream(__dirname +  dir1 + '/inforef.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'inforef';
  }).text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/inforef>' ;
  });
  ws.end();
}

// inforef for every section

for(i=0;i<len;i++){
  var dir1 = "/semi_converted_file/sections/section_" + (i+12);
  var ws = fs.createWriteStream(__dirname +  dir1 + '/inforef.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'inforef';
  }).text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/inforef>' ;
  });
  ws.end();
}

// roles.xml for every label

for(i=0;i<len;i++){
  var dir1 = "/semi_converted_file/activities/label_" + (i+2);
  var ws = fs.createWriteStream(__dirname +  dir1 + '/roles.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'roles';
  }).writeElement('role_overrides', ' ').writeElement('role_assignments', ' ').text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/roles>' ;
  });
  ws.end();
}

// writer for course/course.XML
var date = new Date();
var datestarted = (Math.floor(date.getTime()/1000))
var timecreated = (Math.floor(date.getTime()/1000));
var timemodified = (Math.floor(date.getTime()/1000));
shortname = obj_pulseconfig.courseId;
fullname = obj_pulseconfig.data.course.title;

var ws = fs.createWriteStream(__dirname + '/semi_converted_file/course/course.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'course';
}).writeAttribute('contextid', '36').writeAttribute('id', '3').writeElement("shortname",shortname).writeElement("fullname",fullname).writeElement("idnumber","").writeElement("summary","").writeElement("summaryformat","1").writeElement("format","weeks").writeElement("showgrades","1")
.writeElement("newsitems","5").writeElement("startdate",datestarted).writeElement("marker","0").writeElement("maxbytes","0").writeElement("legacyfiles","0").writeElement("showreports","0").writeElement("visible","1")
.writeElement("groupmode","0").writeElement("groupmodeforce","0").writeElement("defaultgroupingid","0").writeElement("lang","").writeElement("theme","").writeElement("timecreated",timecreated).writeElement("timemodified",timemodified)
.writeElement("requested","0").writeElement("enablecompletion","0").writeElement("completionnotify","0").writeElement("numsections", len-1).writeElement("hiddensections", "0").writeElement("coursedisplay","0")
.startElement('category',' ').writeAttribute('id', '1').writeElement("name","Miscellaneous").writeElement("description","$@NULL@$").startElement('/category',' ').writeElement("tags"," ").text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/course>' ;
});
ws.end();


// Actual parsing of data from the json file and adapting to moodle mbz

for(i=0;i<len-1;i++){
  var dir1 = "/semi_converted_file/activities/label_" + (i+2);
  var dir2 = "/semi_converted_file/sections/section_" + (i+13);
  var date = new Date();
  var timemodified = (Math.floor(date.getTime()/1000));
  var activity_contextid = 43;
  var topic_data = obj_pulseconfig.data.sessions[i].topic;
  var objective_data = obj_pulseconfig.data.sessions[i].objective;
  var objective_data_p = "<p>" + objective_data + "</p>"

  //  // writer for activities/label.xml

  var ws = fs.createWriteStream(__dirname +  dir1 + '/label.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'activity';
  }).writeAttribute('contextid', activity_contextid+i ).writeAttribute('modulename', "label").writeAttribute('moduleid', i+2).writeAttribute('id', i+1).startElement('label',' ').writeAttribute('id', i+1)
  .writeElement('name', objective_data).writeElement('intro',objective_data_p).writeElement('introformat',"1").writeElement('timemodified',timemodified).startElement('/label',' ').text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/activity>' ;
  });
  ws.end();

  // writer for activities/module.xml

  var ws = fs.createWriteStream(__dirname +  dir1 + '/module.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'module';
  }).writeAttribute('version', "2016052300" ).writeAttribute('id', i+2 ).writeElement('modulename',"label").writeElement('sectionid', i+13).writeElement('sectionnumber', i+1).writeElement('idnumber', "$@NULL@$")
  .writeElement('added', timemodified).writeElement('score',"0").writeElement('indent', "0").writeElement('visible', "1").writeElement('visibleold', "1").writeElement('groupmode', "0")
  .writeElement('groupingid', "0").writeElement('completion', "0").writeElement('completiongradeitemnumber', "$@NULL@$").writeElement('completionview', "0").writeElement('completionexpected', "0")
  .writeElement('availability', "$@NULL@$").writeElement('showdescription', "0").writeElement('tags', " ").text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/module>' ;
  });
  ws.end();

  // writer for sections/section.xml

  var ws = fs.createWriteStream(__dirname +  dir2 + '/section.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'section';
  }).writeAttribute('id', i+13 ).writeElement('number',i+1).writeElement('name',topic_data).writeElement('summary',"").writeElement('summaryformat',"1").writeElement('sequence',i+2)
  .writeElement('visible',"1").writeElement('availabilityjson',"$@NULL@$").text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/section>' ;
  });
  ws.end();

  // singular default first section

  var ws = fs.createWriteStream(__dirname + '/semi_converted_file/sections/section_12/section.xml');
  ws.on('close', function() {
  });
  xw = new XMLWriter(false, function(string, encoding) {
      ws.write(string, encoding);
  });
  xw.startDocument('1.0', 'UTF-8').startElement(function() {
    return 'section';
  }).writeAttribute('id', "12" ).writeElement('number',"0").writeElement('name',"$@NULL@$").writeElement('summary',"$@NULL@$").writeElement('summaryformat',"0").writeElement('sequence',"$@NULL@$")
  .writeElement('visible',"1").writeElement('availabilityjson',"$@NULL@$").text(function() {
    return ' ';
  });
  xw.endDocument().startElement(function() {
    return '/section>' ;
  });
  ws.end();

}
});

// course/enrolments.xml

var enrol_id = 4 ;
var date = new Date();
var timemodified1 = (Math.floor(date.getTime()/1000));
var ws = fs.createWriteStream(__dirname + '/semi_converted_file/course/enrolments.xml');
ws.on('close', function() {
});
xw = new XMLWriter(false, function(string, encoding) {
    ws.write(string, encoding);
});
xw.startDocument('1.0', 'UTF-8').startElement(function() {
  return 'enrolments';
}).startElement('enrols', ' ').startElement('enrol', ' ').writeAttribute('id', enrol_id).writeElement("enrol","manual").writeElement("status","0").writeElement("name","$@NULL@$").writeElement("enrolperiod","0")
.writeElement("enrolstartdate","0").writeElement("enrolenddate","0").writeElement("expirynotify","0").writeElement("expirythreshold","86400").writeElement("notifyall","0").writeElement("password","$@NULL@$")
.writeElement("cost","$@NULL@$").writeElement("currency","$@NULL@$").writeElement("roleid","5").writeElement("customint1","$@NULL@$").writeElement("customint2","$@NULL@$").writeElement("customint3","$@NULL@$").writeElement("customint4","$@NULL@$").writeElement("customint5","$@NULL@$")
.writeElement("customint6","$@NULL@$").writeElement("customint7","$@NULL@$").writeElement("customint8","$@NULL@$").writeElement("customchar1","$@NULL@$").writeElement("customchar2","$@NULL@$").writeElement("customchar3","$@NULL@$")
.writeElement("customdec1","$@NULL@$").writeElement("customdec2","$@NULL@$").writeElement("customtext1","$@NULL@$").writeElement("customtext2","$@NULL@$").writeElement("customtext3","$@NULL@$").writeElement("customtext4","$@NULL@$")
.writeElement("timecreated",timemodified1).writeElement("timemodified",timemodified1).writeElement("user_enrolments"," ").startElement('/enrol', ' ').startElement('enrol', ' ').writeAttribute('id', enrol_id+1)
.writeElement("enrol","guest").writeElement("status","1").writeElement("name","$@NULL@$").writeElement("enrolperiod","0")
.writeElement("enrolstartdate","0").writeElement("enrolenddate","0").writeElement("expirynotify","0").writeElement("expirythreshold","0").writeElement("notifyall","0").writeElement("password","$@NULL@$")
.writeElement("cost","$@NULL@$").writeElement("currency","$@NULL@$").writeElement("roleid","0").writeElement("customint1","$@NULL@$").writeElement("customint2","$@NULL@$").writeElement("customint3","$@NULL@$").writeElement("customint4","$@NULL@$").writeElement("customint5","$@NULL@$")
.writeElement("customint6","$@NULL@$").writeElement("customint7","$@NULL@$").writeElement("customint8","$@NULL@$").writeElement("customchar1","$@NULL@$").writeElement("customchar2","$@NULL@$").writeElement("customchar3","$@NULL@$")
.writeElement("customdec1","$@NULL@$").writeElement("customdec2","$@NULL@$").writeElement("customtext1","$@NULL@$").writeElement("customtext2","$@NULL@$").writeElement("customtext3","$@NULL@$").writeElement("customtext4","$@NULL@$")
.writeElement("timecreated",timemodified1).writeElement("timemodified",timemodified1).writeElement("user_enrolments"," ").startElement('/enrol', ' ').startElement('enrol', ' ').writeAttribute('id', enrol_id+2)
.writeElement("enrol","self").writeElement("status","1").writeElement("name","$@NULL@$").writeElement("enrolperiod","0")
.writeElement("enrolstartdate","0").writeElement("enrolenddate","0").writeElement("expirynotify","0").writeElement("expirythreshold","86400").writeElement("notifyall","0").writeElement("password","$@NULL@$")
.writeElement("cost","$@NULL@$").writeElement("currency","$@NULL@$").writeElement("roleid","5").writeElement("customint1","0").writeElement("customint2","0").writeElement("customint3","0").writeElement("customint4","1").writeElement("customint5","0")
.writeElement("customint6","1").writeElement("customint7","$@NULL@$").writeElement("customint8","$@NULL@$").writeElement("customchar1","$@NULL@$").writeElement("customchar2","$@NULL@$").writeElement("customchar3","$@NULL@$")
.writeElement("customdec1","$@NULL@$").writeElement("customdec2","$@NULL@$").writeElement("customtext1","$@NULL@$").writeElement("customtext2","$@NULL@$").writeElement("customtext3","$@NULL@$").writeElement("customtext4","$@NULL@$")
.writeElement("timecreated",timemodified1).writeElement("timemodified",timemodified1).writeElement("user_enrolments"," ").startElement('/enrol', ' ').startElement('/enrols', ' ').text(function() {
  return ' ';
});
xw.endDocument().startElement(function() {
  return '/enrolments>' ;
});
ws.end();

compressor.maincompressor();
