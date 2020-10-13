var express = require('express');
var app = express(); //결과적으로 app에 express에 대한 모든 것이 들어있음

app.listen(3000, function(){ //3000번 포트를 listen하겠다
    console.log("http://127.0.0.1:3000"); //http://127.0.0.1 내 컴퓨터 주소
}); //port를 바라봄

app.get('/', function(req, res, next){
    res.send('<h1>Hello World</h1>');
});

app.get('/earthday-lim', function(req, res, next){
    res.send('<h1>Hello earthday-lim</h1>');
});