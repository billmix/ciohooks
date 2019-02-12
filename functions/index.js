var request = require('request');
const siteid = process.env.SITEID
const apikey = process.env.APIKEY

exports.cioWrite = function cioWrite (req, res) {

  if(req.body === undefined){
   res.status(400).send('No message defined!');
  }else{
  	console.log("Message Accepted");
  }

  // make the CIO API call
  var options = {
    method: 'PUT',
    uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + req.body.email,
    json:    req.body
  };

  request(options, function(error, presp, pbody){
   res.status(200).send(req.body);
   console.log("Success");
  });

};
