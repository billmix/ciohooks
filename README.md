# ciohooks
This is a basic Google Cloud Function to forward a few important Shopify webhooks to Customer.io

# Instructions
### Clone the repo
`git clone https://github.com/billmix/ciohooks.git`

### CD into the ciohooks directory
`cd ciohooks`

### Install dependencies
`npm install`

### Find your Customer.io `site id` and `api key`

### Using the [Google Cloud SDK](https://cloud.google.com/sdk/docs/how-to), you can configure and deploy the new function from the command line

`gcloud functions deploy ciohooks --trigger-http --set-env-vars=[SITEID={ENTER YOUR CUSTOMER.IO SITE ID}, APIKEY={ENTER YOUR SCUSTOMER.IO API KEY}]`

Example:

`gcloud functions deploy ciohooks --trigger-http --set-env-vars=[SITEID=123456, APIKEY=123456]`




