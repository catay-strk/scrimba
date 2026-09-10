///////////////////
// EventEmmitter //
///////////////////

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

////////////////////////
// Server-Sent Events //
////////////////////////

import http from 'node:http'
import { handleFiles } from './handleFiles.js'
import { getTemp } from './getTemp.js'

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  if (!req.url.startsWith('/temp/live')) {
    return await handleFiles(req, res, __dirname)
  } else if (req.url === '/temp/live') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    setInterval( () => {

        const temperature = getTemp()
        res.write(                  // double \n ir required by the server-sent events protocol,
                                    // it signifies the end of a complete message block
            `data: ${JSON.stringify({ event: 'temp-updated', temp: temperature})}\n\n` 
        )
    }, 2000)
    
  }
  
})

server.listen(8000, () => console.log('listening 8000'))