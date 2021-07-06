const http=require('http');

const server=http.createServer((req, res) =>{
    console.log('Bir istekte bulunuldu');
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write("<b>Merhaba</b> Dünya");
    res.end();
})

server.listen(3000);