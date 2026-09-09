import path from "node:path"
import fs from 'node:fs/promises'

export async function getData() {

    /*
    Challenge:
    1. getData() should: 
        - read the json in json.data as a string 
        - parse it to JS 
        - return the parsed data. 

    If there’s an error, it should return an empty array (think, why are we doing this?).

    hint.md for help
    */
    try {
        const pathJSON = path.join('data', 'data.json') // using path.join for OS agnostic
        const data = await fs.readFile(pathJSON)
        return JSON.parse(data)
    } catch (err) {
        
        console.log(err)
        return []
    }

    return 'I am from getData()!'
}