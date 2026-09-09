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
    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
        /*
        Challenge:
        1. Check if the url starts with “/api/continent”.
            (Is there a JS method that allows you to check what a string starts with?)

        2. If it does, serve only items from that continent.
            (How can you get to what comes after the final slash?)
            (What method can you use to filter data?)
        */
        const continent = req.url.split("/").pop()

        const filterdData = []

        for (let i = 0; i < destinations.length; i++) {
            if (destinations[i].continent.toLowerCase() === continent.toLowerCase()) {
                filterdData.push(destinations[i])
            }
        }

        /* alternative to the for loop / if:
            const filteredData = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase()
            })
        */

        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.end(JSON.stringify(filterdData))

    } else {

        res.setHeader("Content-Type", "application/json")
        // res.statusMessage = "error"
        res.statusCode = 404
        res.end(JSON.stringify({
            error: "not found", 
            message: "The requested route does not exist"
        }))
    }
    res.end()
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
