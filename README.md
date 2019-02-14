# ciohooks
This is a basic Google Cloud Function to forward a few important Shopify webhooks to Customer.io

# Instructions
1. Clone the repo
```git clone https://github.com/billmix/ciohooks.git```

2. CD into the ciohooks directory
```cd ciohooks```

3. Install dependencies
```npm install```

4. Find your Customer.io `site id` and `api key`

5. Using the [Google Cloud SDK](https://cloud.google.com/sdk/docs/how-to), you can configure and deploy the new function from the command line
```gcloud functions deploy ciohooks --trigger-http --set-env-vars=[SITEID={ENTER YOUR CUSTOMER.IO SITE ID}, APIKEY={ENTER YOUR SCUSTOMER.IO API KEY}]```
Example
```gcloud functions deploy ciohooks --trigger-http --set-env-vars=[SITEID=123456, APIKEY=123456]```




