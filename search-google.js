var http = require('http');
var util = require('util');
var cheerio = require('cheerio');

var Crawler_google = function(){
  this.name = 'sohu';
};

Crawler_google.prototype.search = function(str, cb){
  var pattern = "https://google.org/personfinder/2013-sichuan-earthquake/results?role=seek&query=" + encodeURIComponent(str);

  require('request')({uri: pattern}, function(err, resp, body){
  });

};

module.exports.Crawler_google = Crawler_google;