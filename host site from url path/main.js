import http from "http"
import fs from "fs"
import url from "url"

http.createServer((req, res) => {
    
    let q = url.parse(req.url, true)
    let parsed = url.parse(q, true)
    let filename = "." + parsed.pathname
    fs.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {"Content-Type": "text/html"})
            return res.end("404 Not Found")
        }
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        res.end()
    })
}).listen(8080, ()=>{
    console.log("Server running at http://localhost:8080/")
})