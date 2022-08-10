const http = require("http");
var static = require('node-static');
const fs = require("fs");
const PORT = process.env.PORT || 5000;
var file = new(static.Server)("Home");
const server = http.createServer(function (req, res) {
    file.serve(req,res, function (error) {
        if (error) {
            fs.readFile("404/index.html", function(err, data ){
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            })
        }
    });
});

server.listen(PORT, function (error) {
    if (error) {
        console.log(error);
    }else{
        console.log(`http://localhost:${PORT}`);
    }
});
