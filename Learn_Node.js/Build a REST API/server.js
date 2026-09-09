import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()

    /*
        Challenge:
        1. Complete the two lines of code below.
            hint.md for help!
    */

    const urlObj = new URL(req.url, `http://${req.headers.host}`) // Use the URL constructor and pass in the relative and base urls.
    console.log(urlObj)
    const queryObj = Object.fromEntries(urlObj.searchParams)// Use the fromEntries() method on the Object class .
                    // What do you need to pass in? 

    /*
    Challenge:
    1. Have a look through the urlObj and find a property which we 
        can use instead of req.url. We need something that will 
        satisfy the condition regardless of whether query params were used.
    */

    if (urlObj.pathname === "/api" && req.method === "GET") {
        let filteredData = getDataByQueryParams(destinations, queryObj)

        console.log(queryObj)
        // update filteredData
        /*
        Challenge:

        1. Update filteredData so it holds only the objects the client wants 
            based on query params. If the client doesn’t use any query params, 
            serve all of the data.
            The query params we are accepting are:
            'country', 'continent', and 'is_open_to_public'.

            Keep our code tidy by doing the the filtering in a util function.
        */

        sendJSONResponse(res, 200, filteredData)

    } else if (req.url.startsWith("/api/continent") && req.method === "GET") {

        const continent = req.url.split("/").pop()
        const filteredData = getDataByPathParams(destinations, "continent", continent)

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

        const filteredData = getDataByPathParams(destinations, "country", country)

        sendJSONResponse(res, 200, filteredData)

    } else {

        sendJSONResponse(res, 404, {
            error: "not found", 
            message: "The requested route does not exist"
        })
    }
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
