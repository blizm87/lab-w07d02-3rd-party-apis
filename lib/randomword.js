var request = require('request');

var get = function(result) {
  request('http://randomword.setgetgo.com/get.php', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body); // Show the HTML for the Google homepage.
      result(body);
    }
  });
}

module.exports = {
  get
}
