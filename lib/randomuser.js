var request = require('request');

request('https://randomuser.me/api/', function(err, resp, body){
  if(!err && resp.statusCode === 200){
    const data = JSON.parse(body);
    console.log(data);
  }
});
