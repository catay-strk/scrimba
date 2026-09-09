import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { filterData } from './utils/getDataByPathParams.js'

const PORT = 8000

/*
Challenge:
  1. Add an 'api/country/<country>' route.
*/
/*
Challenge:
  1. Create a util function to filter data.
  2. Wire it up and delete unneeded code.
*/

const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()

    if (req.url === "/api" && req.method === "GET") {

        sendJSONResponse(res, 200, destinations)

    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {

        const continent = req.url.split("/").pop()
        const filteredData = filterData(destinations, "continent", continent)

        // for (let i = 0; i < destinations.length; i++) {
        //     if (destinations[i].continent.toLowerCase() === continent.toLowerCase()) {
        //         filteredData.push(destinations[i])
        //     }
        // }

        // /* alternative to the for loop / if:
        //     const filteredData = destinations.filter((destination) => {
        //     return destination.continent.toLowerCase() === continent.toLowerCase()
        //     })
        // */

        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith("/api/country") && req.method === "GET") {

        const country = req.url.split("/").pop()
        // const filteredData = destinations.filter((destination) => {
        //     return destination.country.toLowerCase() === country.toLowerCase()
        // })

        const filteredData = filterData(destinations, "country", country)

        sendJSONResponse(res, 200, filteredData)

    } else {

        sendJSONResponse(res, 404, {
            error: "not found", 
            message: "The requested route does not exist"
        })
    }
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
