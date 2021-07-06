const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Bir istekte bulunuldu");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  fs.readFile("index.html",(err, data) =>{
      if (err) {
          throw err;
      }
      res.end(data);
  })
});

server.listen(3000);
