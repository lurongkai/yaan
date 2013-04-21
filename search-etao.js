var http = require('http');
var util = require('util');
var cheerio = require('cheerio');

var Crawler_etao = function(){
  this.name = 'sohu';
};

Crawler_etao.prototype.search = function(str, cb){
  var pattern = "http://zhaoren.etao.com/find.htm?name=" + encodeURIComponent(str);

  require('request')({uri: pattern}, function(err, resp, body){
  });

};

module.exports.Crawler_etao = Crawler_etao;