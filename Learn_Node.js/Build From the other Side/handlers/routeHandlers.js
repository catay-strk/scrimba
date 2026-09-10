import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { santizeData } from "../utils/sanitizeInput.js"

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
        
    } catch (err) { // 406, 422
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
    }
}