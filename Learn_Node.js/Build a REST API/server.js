import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000

/*
Challenge:
  1. Create a utility function to make this code DRYer.
  2. Delete unnecessary code.
*/

const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {
        
        sendJSONResponse(res, 200, destinations)

    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {

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

        sendJSONResponse(res, 200, filterdData)

    } else {

        sendJSONResponse(res, 404, {
            error: "not found", 
            message: "The requested route does not exist"
        })
    }
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
