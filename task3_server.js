const http = require ('http');

http.createServer((req, res) => {
    setTimeout(console.log("Секундочку..."), 1000);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('it work');
    }).listen (3000, ()=> console.log('Сервер работает'));