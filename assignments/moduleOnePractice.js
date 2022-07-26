const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter User</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    res.end();
  }

  if (url == "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title><head>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Steve Irwin</li>");
    res.write("<li>Steve Irwin</li>");
    res.write("<li>Steve Irwin</li>");
    res.write("<li>Steve Irwin</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000);
