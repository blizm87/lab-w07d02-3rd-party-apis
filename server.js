var express = require('express');
const randomWord = require('./lib/randomword.js');
const randomUser = require('./lib/randomuser.js');
const trivia = require('./lib/trivia.js');
const exchange = require('./lib/exchange.js');
const recipe = require('./lib/recipes.js');
const gitHub = require('./lib/github.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/randomword', randomWord);
app.use('/randomuser', randomUser);
app.use('/trivia', trivia);
app.use('/exchange', exchange);
app.use('/recipes/search', recipe);
app.use('/github/:profileName', gitHub);




app.get('/', function(req, resp){
  randomWord.get(function(data){
    var html = '<p>';
    html += data + '</p>';
    resp.send(html);
  });
})

var port = 3000;
app.listen(port, function(){
  console.log('Up and running!');
});
