# GraphQL Api using AWS SAM and AWS AppSync

The motivation behind this project was to create the underlying infrastructure of a GraphQL Api that is easy to extend, uses Cognito as the default authorizer, and the resolvers are connected to lambda functions so that you can have more control over the requests.


## Prerequisite
* AWS CLI -  [Install and configure AWS CLI CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js](https://nodejs.org/en/), including the NPM package management tool.


## Deploy

To build and deploy your application, run the following in your shell:

```
npm run deploy
```

or 

```
yarn deploy
```

The SAM CLI installs dependencies defined in `graphql/resolvers/X/package.json`, creates a deployment package, and saves it in the `.aws-sam/build` folder.


## Cleanup

To remove all the resources associated with your stack, you can run the following:

```bash
aws cloudformation delete-stack --stack-name MY_STACK_NAME
```

