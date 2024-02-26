const http = require("node:http");
const fs = require("fs");
const path = require("path");
const date = require("./date.js");

const hostname = "127.0.0.1";
const port = process.env.PORT;

function serverListenAction(server) {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

function createDateServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    //response to send
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello World\n");
    res.write(`${url.pathname}\n`);
    res.write(
      `${url.searchParams.get("year")} ${url.searchParams.get("month")}\n`
    );
    res.end("The date and time are currently: " + date.myDateTime());
  });

  //use Ctrl + C to stop server
  serverListenAction(server);
}

function createFileServer() {
  let filePath = path.resolve(__dirname, `../data/demofile1.html`);

  const server = http.createServer(function (req, res) {
    fs.readFile(filePath, function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  });

  serverListenAction(server);
}

function openRequestedHtmlServer() {
  let getPath = (filename) =>
    path.resolve(__dirname, `../data/${filename}.html`);

  const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);

    fs.readFile(getPath(url.pathname), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  });

  serverListenAction(server);
}

module.exports = {
  createDateServer,
  createFileServer,
  openRequestedHtmlServer,
};
