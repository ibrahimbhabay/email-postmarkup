# email-postmarkup

## Instructions to run the service locally
- install dependencies -> npm i
- install mongodb locally -> https://www.mongodb.com/docs/v4.2/tutorial/install-mongodb-on-os-x/
- run mongodb as service (MacOS)-> brew services start mongodb-community@4.2  OR  brew services start  mongodb/brew/mongodb-community@4.2
- start the service -> npm run start


## Highlight issues
- Inbound webhook will not work. Since the postmarkup server does not accept a private ip or hostname for web hooks.
- please wait till the email service is deployed on the cloud.
