import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  console.log(req.url)

/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/
    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {

        res.write(JSON.stringify(destinations))
    }
    res.end()
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
