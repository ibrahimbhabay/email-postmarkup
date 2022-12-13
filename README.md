# email-postmark

## Instructions to run the service locally
- install dependencies -> npm i
- install mongodb locally -> https://www.mongodb.com/docs/v4.2/tutorial/install-mongodb-on-os-x/
- run mongodb as service (MacOS)-> brew services start mongodb-community@4.2  OR  brew services start  mongodb/brew/mongodb-community@4.2
- start the service -> npm run start


## Highlight issues
- On local setup, inbound webhook will not work. Since the postmarkup server does not accept a private ip or hostname for web hooks.
- please use hosted api for webhooks https://email-postmark.herokuapp.com/api/emails


## Endpoints
- Healthcheck
https://email-postmark.herokuapp.com/api/emails/healthcheck

- Get all emails
https://email-postmark.herokuapp.com/api/emails/fetch-all

- Get recieved emails
https://email-postmark.herokuapp.com/api/emails/fetch?folder=inbox

- Get sent emails
https://email-postmark.herokuapp.com/api/emails/fetch?folder=sent


- Send email
https://email-postmark.herokuapp.com/api/emails/send

body 
 {
  "From": "sender@examplemail.com",
  "To": "reciever@examplemail.com",
  "Subject": "Greetings",
  "TextBody": "Hello,
}

- Webhook to recieve email
https://email-postmark.herokuapp.com/api/emails/webhooks/inbound



