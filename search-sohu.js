var http = require('http');
var util = require('util');
var cheerio = require('cheerio');

var Crawler_sohu = function(){
  this.name = 'sohu';
};

Crawler_sohu.prototype.search = function(str, cb){
  var pattern = "http://gongyi.in.sohu.com/yaan/searchPerson.php?type=1&keyword=" + encodeURIComponent(str);
  
  require('request')({uri: pattern}, function(err, resp, body){
  
  });

};

module.exports.Crawler_sohu = Crawler_sohu;