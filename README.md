# ciohooks
This is a basic Google Cloud Function to forward a few important Shopify webhooks to Customer.io.

There is currently support for the following Shopify Webhooks:
- Customer creation
- Customer update
- Order creation
- Order payment
- Order update

# Instructions
**Clone the repo**
```
git clone https://github.com/billmix/ciohooks.git
```

**CD into the ciohooks directory**
```
cd ciohooks
```

**Install dependencies**
```
npm install
```

**Find your Customer.io `site id` and `api key` from your [Customer.io settings]**(https://fly.customer.io/settings/api_credentials)

**Using the [Google Cloud SDK](https://cloud.google.com/sdk/docs/how-to), you can configure and deploy the new function from the command line**

```
gcloud functions deploy ciohooks --trigger-http --set-env-vars SITEID={ENTER YOUR CUSTOMER.IO SITE ID},APIKEY={ENTER YOUR SCUSTOMER.IO API KEY}
```

Example:
```
gcloud functions deploy ciohooks --trigger-http --set-env-vars SITEID=123456,APIKEY=123456
```

The output will be something like: 
```
Deploying function (may take a while - up to 2 minutes)...done.                  
availableMemoryMb: 256
entryPoint: ciohooks
environmentVariables:
  APIKEY: 123456
  SITEID: 123456
httpsTrigger:
  url: https://us-central1-ciohooks-XXXXXX.cloudfunctions.net/ciohooks
labels:
  deployment-tool: cli-gcloud
name: projects/ciohooks-XXXXXX/locations/us-central1/functions/ciohooks
runtime: nodejs6
serviceAccountEmail: ciohooks-XXXXXX@appspot.gserviceaccount.com
sourceUploadUrl: https://storage.googleapis.com/...
status: ACTIVE
timeout: 60s
updateTime: '2019-02-14T19:18:39Z'
versionId: '4'
```

The httpsTrigger URL is what you'll need to configure your Shopify webhooks

```
https://us-central1-ciohooks-XXXXXX.cloudfunctions.net/ciohooks
```

**Configure your Shopify Webhooks**
1. Go to Shopify Admin > Settings > Notifications and scroll down to Webhooks
1. Repeat these steps for each of the supported webhooks (see above)
    1. Click `Create webhook`
    1. Use the httpsTrigger URL from the previous step in the Callback URL field
    1. Save and click `Send Test Notification`
