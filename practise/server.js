var http = require('http');
var url = require('url');

var port = process.argv[2] || 3000;

http.createServer(function (request, res) {
    var parsedUrl = url.parse(request.url, true)
    switch (parsedUrl.pathname) {
        case '/':
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
                <link rel="stylesheet" href="./style.css">
                <script src="./main.js"></script>
            </head>
            <body>
            </body>
            </html>`);
            break;
        case '/style.css':
            res.setHeader('Content-Type', 'text/css;charset=utf-8');
            res.write(` body {
                background-color: red;
            }`);
            break;
        case '/main.js':
            res.setHeader('Content-Type', 'text/javascript;charset=utf-8');
            res.write(`alert('脚本执行')`);
            break;
        default:
            res.statusCode = 404;
            break;
    }
    res.end();
}).listen(port);