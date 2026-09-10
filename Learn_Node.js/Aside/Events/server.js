// import EventEmitter
import { EventEmitter } from 'node:events'

const customerDetails = {
  fullName: 'Meryl Sheep',
  email: 'baah@thedevilwearswool.com',
  phone: 12345678910
}

// create the emitter
const emailRequestEmitter = new EventEmitter()

// define the listener function
function generateEmail(customer) {
  console.log(`Email generated for ${customer.email}`)
}

// register the listener
emailRequestEmitter.on('emailRequest', generateEmail)
emailRequestEmitter.on('emailRequest', () => console.log('task assigned'))
emailRequestEmitter.on('emailRequest', () => console.log('email logged'))

// emit the event
setTimeout(()=> {
  emailRequestEmitter.emit('emailRequest', customerDetails)
}, 2000)
