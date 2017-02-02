const express = require('express');
const randomWord = require('./lib/randomword.js');
const randomUser = require('./lib/randomuser.js');
const recipes = require('./lib/recipes.js');
const trivia = require('./lib/trivia.js');
const exchange = require('./lib/exchange.js');
const github = require('./lib/github.js');

const app = express();

app.get('/randomword', function(req, resp){
  randomWord.get(function(data){
    var html = '<p>';
    html += data + '</p>';
    resp.send(html);
  });
});

app.get('/randomuser', function(req, resp){
  randomUser.get(function(data){
    var html = '<p>';
    html += data + '</p>';
    resp.send(html);
  })
})

app.get('/random', function(req, resp, next){
  var html =
  randomWord.get().then(console.log);
  randomUser.get( (data) => {
    // console.log(data);
  });
});

app.get('/game', function(req, resp, next){

});

app.get('/money', function(req, resp, next){

});

app.get('/hungry', function(req, resp, next){

});

app.get('/dev', function(req, resp, next){

});

const port = 3000;
app.listen(port, function(){
  console.log('Up and Running!');
});
