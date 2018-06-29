High Fives GraphQL Lambda
================
This project contains the back-end code for all High Fives Foundation websites and apps. This project contains a single lambda function that serves up a GraphQL endpoint.

Installation
------------
First, you need to install dependencies locally and make sure the graphqlHandler function is working locally.

1. Install the dependencies: `yarn` -or- `npm install`
2. `yarn test:query` -or- `npm run test:query`
3. Your output should contain a successful `200` response

```json
{
    "statusCode": 200,
    "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    "body": {
        "data": {
            "hello": "world!!!"
        }
    }
}
```

Deployment
----------
You can deploy the lambda function to your own AWS Account. You will need to set-up a few things in your local development environment to make it happen.

1. Create an AWS account at `https://aws.amazon.com/`, save your `Access key ID` and `Secret access key`, you'll need it.
2. Install the AWS CLI: `brew intall awscli`
3. Configure your AWS CLI: `aws configure`, add your secret key and access key. **You can leave the Default region name and Default output format the way they are.**
4. Install the Serverless Framework: `yarn global add serverless` -or- `npm install -g serverless`
5. Run the deploy command: `yarn deploy` or `npm deploy`

Once you've completed a successful deployment you can see your Lambda Functions running at the [aws console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions).

