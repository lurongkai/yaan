var http = require('http');
var util = require('util');
var cheerio = require('cheerio');

var Crawler = function(){};
Crawler.workers = [];

Crawler.search = function(str, cb){
  debug('will search: ', str);

  var content = [];
  Crawler.workers.forEach(function(worker){
    debug('search ['+ worker.name +'] by {' + str + '}');
    worker.search(str, cb);
  });
};

Crawler.register = function(_c){
  Crawler.workers.push(_c);
};

Crawler.init = function(crawlers){
  crawlers.forEach(function(crawler){
    Crawler.workers.push(crawler);
  });
};

module.exports.Crawler = Crawler;