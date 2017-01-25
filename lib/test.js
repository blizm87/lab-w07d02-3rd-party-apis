const randomUser = require('./randomuser.js');
const randomWord = require('./randomWord.js');
const trivia = require('./trivia.js');
const usExchange = require('./exchange.js');
const recipe = require('./recipes.js');
const github = require('./github.js');

randomWord.get(function(data){
  console.log(data);
});

randomUser.get(function(data){
  console.log(data);
});

trivia.get(function(data){
  console.log(data);
});

usExchange.get(function(data){
  console.log(data.rates.USD);
});

recipe.search(function(data){
  console.log(data.results[0].title);
});

github.get(function(data){
  console.log(data);
});
