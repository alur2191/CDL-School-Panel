import React from 'react'
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const HomePage = () => {
  return (
    <div>
      Hello world
    </div>
  )
}

export default HomePage
