var request = require('request');

var get = function(result) {
  const options = {
    url: 'https://api.github.com/users/blizm87',
    headers: {
      'User-Agent': 'request'
    }
  };
  request(options, function(err, resp, body){
    if(!err && resp.statusCode === 200){
      const data = JSON.parse(body);
      console.log(data);
    }
  });
}

module.exports = {
  get
}
