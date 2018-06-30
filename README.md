High Fives GraphQL Lambda
================
This project contains the back-end code for all High Fives Foundation websites and apps. This project contains a single lambda function that serves up a GraphQL endpoint.

Installation
------------
First, you need to install dependencies locally and make sure the graphqlHandler function is working locally.

1. Install the dependencies: `yarn` -or- `npm install`
2. Install the serverless framework: `yarn add 
3. Install the Serverless Framework: `yarn global add serverless` -or- `npm install -g serverless`
4. Your output should contain a successful `200` response

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

Deployed Endpoints
-----------
* __Staging__: [https://6n69v07012.execute-api.us-west-1.amazonaws.com/staging/graphql](https://6n69v07012.execute-api.us-west-1.amazonaws.com/staging/graphql)
* __Production__: [https://ymst9nocol.execute-api.us-west-1.amazonaws.com/production/graphql](https://ymst9nocol.execute-api.us-west-1.amazonaws.com/production/graphql)

Deployment
----------
You can deploy the lambda function to your own AWS Account. You will need to set-up a few things in your local development environment to make it happen.

1. Create an AWS account at `https://aws.amazon.com/`, save your `Access key ID` and `Secret access key`, you'll need it.
2. Create an [IAM user](https://serverless-stack.com/chapters/create-an-iam-user.html) with your AWS account
2. Install the AWS CLI: `brew intall awscli`, or follow these [instructions for python](https://serverless-stack.com/chapters/configure-the-aws-cli.html)
3. Configure your AWS CLI: `aws configure`, add your secret key and access key. **You can leave the Default region name and Default output format the way they are.**
5. Run the deploy command: `serverless deploy`

Once you've completed a successful deployment you can see your Lambda Functions running at the [aws console](https://us-west-1.console.aws.amazon.com/lambda/home?region=us-west-1#/functions).

