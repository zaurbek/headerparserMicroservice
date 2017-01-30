var express = require('express')
var app = express()
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.json({ip: req.headers['x-forwarded-for'],
              language: req.headers["accept-language"].toString().split(',')[0],
              browser: req.useragent.browser+' '+req.useragent.version,
              os: req.useragent.os,
              platform: req.useragent.platform,
              
                });
});

app.listen(process.env.PORT || 8080)