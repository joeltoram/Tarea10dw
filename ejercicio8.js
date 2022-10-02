var http = require('http');
const port=3001;

//create a server object:
http.createServer(function (req, res) {
  res.write(`EL servidor corriendo en el puerto http://localhost:${port} `); //write a response to the client

  res.end(); //end the response
}).listen(3001); //the server object listens on port 3001
