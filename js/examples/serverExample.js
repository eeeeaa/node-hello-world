//for http stuff like creating server
const http = require("node:http");
const date = require("../date.js");

//external library for handling api request/response
const axios = require("axios");

function httpGetExample() {
  axios
    .get("https://example.com/todos")
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function httpPostExample() {
  axios
    .post("https://whatever.com/todos", {
      todo: "Buy the milk",
    })
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}

function serverExample() {
  const hostname = "127.0.0.1";
  const port = process.env.PORT;

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
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
