var request = require('request');

var get = function(result) {
  request('http://api.fixer.io/latest', function(err, resp, body){
    if(!err && resp.statusCode === 200){
      const data = JSON.parse(body);
      // console.log(data.rates.USD);
      result(data);
    }
  });
}

module.exports = {
  get
}
