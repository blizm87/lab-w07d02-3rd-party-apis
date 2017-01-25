var request = require('request');

var search = function(query, cb) {
  const url = `http://www.recipepuppy.com/api/?q=${query}`
  request(url, function(err, resp, body){
    if(!err && resp.statusCode === 200){
      const data = JSON.parse(body);
      // console.log(data);
      query(data);
    }
  });
}

module.exports = {
  search
}
