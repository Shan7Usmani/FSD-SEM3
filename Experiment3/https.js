// import http from http;
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "node.js"
    });

    res.end("Hello World");
});

const port = 3005;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});