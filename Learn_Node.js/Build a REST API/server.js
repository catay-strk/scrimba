import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { error } from 'node:console'

const PORT = 8000

const server = http.createServer(async (req, res) => {
  console.log(req.url)

    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.write(JSON.stringify(destinations))
    } else {
        /*
        Challenge:
        1. If the client tries to access a route that isn’t covered by the above, send this object: 
            {error: "not found", message: "The requested route does not exist"}
        Think: what do we need to send along with the data?
        */
       res.setHeader("Content-Type", "application/json")
       // res.statusMessage = "error"
       res.statusCode = 404
       res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
    }
    res.end()
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
