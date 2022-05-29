const http = require("http");

const server = http.createServer((req, res) => {
  if (err) {
    throw err;
  }
  res.end("I am here, Welcome you all...");
});

server.listen(8000, () => {
  console.log("Server is Running on PORT: 8000");
});
