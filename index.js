var request = require('request');
var moment = require('moment');

const siteid = process.env.SITEID;
const apikey = process.env.APIKEY;

exports.cioWrite = function cioWrite (req, res) {
    if(req.body === undefined){
        res.status(400).send('No message defined!');
    }else{
        console.log("Message Accepted");
        var topic = req.headers['x-shopify-topic'];
    };

    switch(topic){
        case 'customers/create':
            id = req.body.id //must reference payload to target customer id
            var ts = moment().unix();

            if(req.body.created_at !== undefined){
                delete req.body.created_at;
                req.body.created_at = ts;
            }else{
                req.body.created_at = ts;
            }
            
            //SET IDENTIFY OPTIONS FOR CREATE CUSTOMER
            var identifyOptions = {
                method: 'PUT',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id,
                json:    true,
                body:    req.body
            };
            
            // SET TRACK OPTIONS FOR CREATE CUSOTMER
            eventName = 'customers_create';
            
            var trackOptions = {
                method: 'POST',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id + '/events',
                json:    true,
                body:    { "name": eventName, "data": req.body }
            };
            
            //CALL IDENTIFY WITH OPTIONS
            request(identifyOptions, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });

            //CALL TRACK WITH OPTIONS
            request(trackOptions, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });
            break;
        case 'customers/update':
            eventName = 'customers_update';
            id = req.body.id //must reference payload to target customer id
            var options = {
                method: 'POST',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id + '/events',
                json:    true,
                body:    { "name": eventName, "data": req.body }
            };
            request(options, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });
            break;
        case 'orders/updated':
            eventName = 'orders_update';
            id = req.body.customer.id //must reference payload to target customer id
            var options = {
                method: 'POST',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id + '/events',
                json:    true,
                body:    { "name": eventName, "data": req.body }
            };
            request(options, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });
            break;
        case 'orders/paid':
            eventName = 'orders_paid';
            id = req.body.customer.id //must reference payload to target customer id
            var options = {
                method: 'POST',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id + '/events',
                json:    true,
                body:    { "name": eventName, "data": req.body }
            };
            request(options, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });
            break;
        case 'orders/create':
            eventName = 'orders_create';
            id = req.body.customer.id //must reference payload to target customer id
            var options = {
                method: 'POST',
                uri:    'https://' + siteid + ':' + apikey + '@track.customer.io/api/v1/customers/' + id + '/events',
                json:    true,
                body:    { "name": eventName, "data": req.body }
            };
            request(options, function(){
                res.status(200).send(options.body);
                console.log("Success for: " + topic);
            });
            break;
        default:
            console.log('close it up');
            break;
    }

};
