// The HTTP module
// - allows data to be transferred over the HTTP protocol
// - create servers
// - Handle requests from clients
// - Provide responses to those requests

import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.end('Hello fom the server!')
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))