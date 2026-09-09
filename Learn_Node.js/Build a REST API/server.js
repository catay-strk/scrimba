import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
  console.log(req.url)

/*
Challenge:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/
/*
Challenge: 
1. Check the ‘method’ property on the req object.
   Only serve our string if it’s ‘GET’.
*/

    if (req.url === "/api" && req.method === "GET") {

        res.write("Server here^^")
    }
    res.end()
})

server.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)})
