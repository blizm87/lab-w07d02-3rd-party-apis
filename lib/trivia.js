var request = require('request');

var get = function(result) {
  request('https://www.opentdb.com/api.php?amount=10', function(err, resp, body){
    if(!err && resp.statusCode === 200){
      const data = JSON.parse(body);
      // console.log(data);
      result(data);
    }
  });
}

module.exports = {
  get
}
