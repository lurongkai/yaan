var http = require('http');
var util = require('util');
var wechat = require('wechat');
var express = require('express');

var Crawler = require('./search').Crawler;

var Crawler_360     = require('./search-360').Crawler_360;
var Crawler_etao    = require('./search-etao').Crawler_etao;
var Crawler_google  = require('./search-google').Crawler_google;
var Crawler_sohu    = require('./search-sohu').Crawler_sohu;


var crawlers = [
	new Crawler_360(), 
	new Crawler_etao(), 
	new Crawler_google(), 
	new Crawler_sohu()
];
Crawler.init(crawlers);

var app = express();
app.use(express.query());



var welcome = function(res){
  res.reply('我们暂时切换到<雅安地震寻人搜索整合>频道，输入姓名，将自动进行整合寻人网站的搜索，统一返回结果.目前已接入：\n360报平安平台');
};

var search = function(str, res){
  Crawler.search(str, function(err, result){
    if(err)
      res.reply('您搜索的【'+str+'】暂时还没有信息，请稍后再查询。');
    else
      res.reply(result);
  });
};

app.use('/', wechat('xiexiaopang', function(req, res, next){
  // console.log(util.inspect(req.weixin));

  var ctx = req.weixin;

  if(ctx.MsgType == 'event' && ctx.Event == 'subscribe'){
    console.log("[SUB] " + ctx.FromUserName);
    welcome(res);
  }else if(ctx.MsgType == 'text'){
    console.log("[Q] " + ctx.FromUserName + " " + ctx.Content);
    search(ctx.Content, res);
  }else if(ctx.MsgType == 'event' && ctx.Event == 'unsubscribe'){
    console.log("[UNSUB]" + ctx.FromUserName);
  }else{
    res.reply('目前只支持寻人信息搜索，请输入名字进行查询');
  }
}));

app.listen(9001);
