var request = require('request');
var moment = require('moment');
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
    json:    true,
    body: {
      "accepts_marketing" : req.body.accepts_marketing,
      "addresses" : req.body.addresses,
      "created_at" : moment().unix,
      "currency" : req.body.currency,
      "default_address" : req.body.default_address,
      "email" : req.body.email,
      "first_name" : req.body.first_name,
      "id" : req.body.id,
      "last_name" : req.body.last_name,
      "note" : req.body.note,
      "orders_count" : req.body.orders_count,
      "phone" : req.body.phone,
      "state" : req.body.state,
      "tax_exempt" : req.body.tax_exempt,
      "test" : req.body.test,
      "total_spent" : req.body.total_spent,
      "updated_at" : req.body.updated_at,
      "verified_email" : req.body.verified_email
    }
  };

  request(options, function(error, presp, pbody){
   res.status(200).send(options.body);
   console.log("Success");
  });

};
