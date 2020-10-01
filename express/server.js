'use strict';
// server.js
// where your node app starts
    
// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var request = require('request')
var xmpp = require('simple-xmpp');
var fs = require('fs');
let sleep = require('js-sleepms');
var bodyParser = require('body-parser');
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
//sleep.SleepMS(5000);
var prox= 'https://in2.epicbrowser.net:8888';
var prox2= 'https://in.epicbrowser.net:8888';
var prox3= 'https://ne2.epicbrowser.net:8888';
var prox4= 'https://ne.epicbrowser.net:8888';
var prox5= 'https://fr2.epicbrowser.net:8888';
var prox6= 'https://es.epicbrowser.com:44300';//
var prox7= 'https://ca2.epicbrowser.net:8888';//
var prox8= 'https://ca.epicbrowser.net:8888';
var prox9= 'https://it2.epicbrowser.com:44300';//
var prox10= 'https://it.epicbrowser.com:44300';
var prox11= 'https://de2.theepicbrowser.com:8888';
var prox12= 'https://de.theepicbrowser.com:8888';
var prox13= 'https://fr.epicbrowser.net:8888';
var HttpsProxyAgent = require('https-proxy-agent');
var agent = new HttpsProxyAgent(prox11);

const {
  readTextFileSync,
  createTextFileSync,
  writeTextFileSync,
  appendTextFileSync 
} = require("@mrothnet/textfile");
// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
var domain = "jabber-germany.de"
const random = require('random')

// https://expressjs.com/en/starter/basic-routing.html
app.post("/sms", (requestx, responsex) => {
var phones=['18077006753','18077006758']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', requestx.body['text'], false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
  //process.exit()

/**
xmpp.on('online', function(data) {
    console.log('Connected with JID: ' + data.jid.user);
    xmpp.send('6043733218@5222.de', 'hello! time is '+new Date(), false);
});
 
xmpp.on('error', function(err) {
    console.error("error:", JSON.stringify(err));
});


//xmpp.getRoster();
  /**
xmpp.on('chat', function(from, message) {
    console.log('%s says %s', from, message);
    responsex.end(message)
    var jcode = message.split('Your JMP verification code is').pop().split(' - ').shift();
});**/
  //xmpp.send('+2'+requestx+'@5222.de', 'hello! time is '+new Date(), false);
});


app.post("/sms3", (requestx, responsex) => {
var phones=['18077005329','18077007036','18077004695','18077007867','18077005358']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', requestx.body['text'], false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
  //process.exit()

/**
xmpp.on('online', function(data) {
    console.log('Connected with JID: ' + data.jid.user);
    xmpp.send('6043733218@5222.de', 'hello! time is '+new Date(), false);
});
 
xmpp.on('error', function(err) {
    console.error("error:", JSON.stringify(err));
});


//xmpp.getRoster();
  /**
xmpp.on('chat', function(from, message) {
    console.log('%s says %s', from, message);
    responsex.end(message)
    var jcode = message.split('Your JMP verification code is').pop().split(' - ').shift();
});**/
  //xmpp.send('+2'+requestx+'@5222.de', 'hello! time is '+new Date(), false);
});



app.post("/sms2", (requestx, responsex) => {
var phones=['12893240945','18077007598','18077006637','18076999534','18077005813','17054141192']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var text = "دلوقتي هيجيلك مكالمة من 010 لتقيم خدمتنا ، التقيم دا بيساعدنا عشان نقدملك عروض أفضل من شركة فودافون."
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', text, false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
  //process.exit()

/**
xmpp.on('online', function(data) {
    console.log('Connected with JID: ' + data.jid.user);
    xmpp.send('6043733218@5222.de', 'hello! time is '+new Date(), false);
});
 
xmpp.on('error', function(err) {
    console.error("error:", JSON.stringify(err));
});


//xmpp.getRoster();
  /**
xmpp.on('chat', function(from, message) {
    console.log('%s says %s', from, message);
    responsex.end(message)
    var jcode = message.split('Your JMP verification code is').pop().split(' - ').shift();
});**/
  //xmpp.send('+2'+requestx+'@5222.de', 'hello! time is '+new Date(), false);
});















// send the default array of dreams to the webpage
app.get("/dreams", (requestx, responsex) => {
  var options = {
      url: 'https://jmp.chat/sp1a/register1/num_find.php',
      method: "GET",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
    };
options.agent = agent;

 request(options, function (error, response, body) {
   //var phone = "15719189312"
  var phone = body.substring(body.lastIndexOf('href="../register2/?number=') + 1, body.lastIndexOf('&city=')).replace('ref="../register2/?number=%2B','');
    var phone_link = body.substring(
    body.lastIndexOf('href="../register2/?number=') + 1, 
    body.lastIndexOf('">+1')
).replace('ref="..','');
  //-------------------------------------------------------------------- 
  var options2 = {
      url: 'https://jmp.chat/sp1a/'+phone_link,
      method: "GET",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
    };
   options2.agent = agent;

 request(options2, function (error2, response2, body2) {
    var sid = body2.split('name="sid" value ="').pop().split('"').shift();
   //-------------------------------------------------------------------------
   var options3 = {
      url: 'http://05f59a34.proxy.webhookapp.com/register_web',
      method: "POST",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    'content-type' : 'application/x-www-form-urlencoded'
    },

    };

 options3.json = false;
 options3.form = {
      username: phone,
      password: "11223344aA",
      confirm_password: "11223344aA",
      captcha_challenge: "5cc69c19da62ed963bedcd14e95712ccd9d26385",
      captcha_reply: "1"
    };

 request(options3, function (error3, response3, body3) {
//-----------------------------------------------------------------------
   var options4 = {
      url: 'https://jmp.chat/sp1a/register3/?number=%2B'+phone+'&sid='+sid+'&jid='+phone+'%40'+domain+'+',
      method: "GET",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
    };
   options3.agent = agent;

 request(options4, function (error4, response4, body4) {
   xmpp.connect({
    jid: phone+'@'+domain,
    password: '11223344aA',
    host: domain,
    port: 5222
});
//xmpp.getRoster();
 //sleep.SleepMS(5000);
xmpp.on('chat', function(from, message) {
    //console.log('%s says %s', from, message);
    //responsex.end(message)
    var jcode = message.split('Your JMP verification code is ').pop().split(' - ').shift();
  console.log('phone: %s code: %s', phone,jcode);
    var options5 = {
      url: 'https://jmp.chat/sp1a/registere/?number=%2B'+phone+'&sid='+sid+'&jcode='+jcode,
      method: "GET",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
      'Referer' : 'https://jmp.chat/sp1a/register3/?number=%2B'+phone+'&sid='+sid+'&jid='+phone+'%40'+domain+'+'
    }
    };
  options5.agent = agent;

 request(options5, function (error5, response5, body5) {
  //-------------------------------------------------------------------
     var options6 = {
      url: 'https://jmp.chat/sp1a/register4/?number=%2B'+phone+'&sid='+sid+'&jcode='+jcode,
      method: "GET",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
      'Referer' : 'https://jmp.chat/sp1a/registere/?number=%2B'+phone+'&sid='+sid+'&jcode='+jcode
    }
    };
   options6.agent = agent;

 request(options6, function (error6, response6, body6) {
   //console.log('https://jmp.chat/sp1a/register4/?number=%2B'+phone+'&sid='+sid+'&jcode='+jcode)
  responsex.end(body6);
   if(body6.indexOf('is now your JMP number') > -1) {
      appendTextFileSync("./public/phones.txt", phone+"\r\n");
}
   
   }); 
   }); 
});
   xmpp.on('close', function() {});
   }); 
    });
   });
  });
  
  /**
   
  var phone = "testomansx"
  // express helps us take JS objects and send them as JSON

var options = {
      url: 'http://05f59a34.proxy.webhookapp.com/register-on-5222.de',
      method: "POST",
      headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
    'content-type' : 'application/x-www-form-urlencoded'
    },

    };

 options.json = false;
 options.form = {
      username: phone,
      password: "11223344aA",
      confirm_password: "11223344aA",
      captcha_challenge: "c0b92221f56300d8fd358aeecc83d19c88ec34aa",
      captcha_reply: "8"
    };

 request(options, function (error, response, body) {
  responsex.end(body);
   console.log(body);
 // console.log(error);
    });
  **/
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

module.exports = app;
module.exports.handler = serverless(app);
