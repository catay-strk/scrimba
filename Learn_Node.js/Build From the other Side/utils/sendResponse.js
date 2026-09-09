/*
Challenge 2:

- Create and export a function called sendResponse().  
  What 4 things should this function take in as parameters?

*/
export function sendResponse(res, statusCode, contentType, payload) {
    
    if (statusCode === 200) {

        res.setHeader('Content-Type', contentType)
        res.statusCode = statusCode
        res.end(payload)
    } // else {
    //     res.stateCode = stateCode
    //     res.end()
    // }
}