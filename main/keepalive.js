module.exports = function() {
  const port = 3000;
  const http = require('http');
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Keep Alive! Don't die.");
    res.end();
  }).listen(port, ()=>{console.log(`listening at http://localhost:${port}`)});
}