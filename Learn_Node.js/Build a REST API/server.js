import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  console.log(req.url)

    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {
/*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
2. Access the 'statusCode' property and set it to 200.
*/
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.write(JSON.stringify(destinations))
    }
    res.end()
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
