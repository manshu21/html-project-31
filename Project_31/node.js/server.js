const http = require("http");
const fs = require("fs");

function serveFile(fileName, res, statusCode = 200) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.error(`Error reading ${fileName}:`, err);

      res.writeHead(500, {
        "Content-Type": "text/html",
      });

      res.end("<h1>500 - Internal Server Error</h1>");
      return;
    }

    res.writeHead(statusCode, {
      "Content-Type": "text/html",
    });

    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    serveFile("home.html", res);
  } else if (req.url === "/about") {
    serveFile("about.html", res);
  } else if (req.url === "/contact") {
    serveFile("contact.html", res);
  } else {
    serveFile("404.html", res, 404);
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
