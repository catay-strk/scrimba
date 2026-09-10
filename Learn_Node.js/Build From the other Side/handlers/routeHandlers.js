import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { santizeData } from "../utils/sanitizeInput.js"
import { sightingEvents } from "../events/sightingEvents.js"

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content) 
}

export async function handlePost(req, res) {

    try {
        const parsedBody = await parseJSONBody(req) // will collect and parse the incoming JSON
    
        const sanitizedBody = santizeData(parsedBody) 
        await addNewSighting(sanitizedBody) // will do the donkey work of adding the data to our dataset
        sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody)) // also sanitizedData here?
        
        /*
        Challenge 2
        1. At the top of this file, import the event emitter you have created.
        2. Use it to emit a ‘sighting-added’ event. 
        What information does the listener function need?
        3. Add a sighting to test!
        */
        // emit the event
        sightingEvents.emit('sighting-added', sanitizedBody)

    } catch (err) { // 406, 422
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
    }
}