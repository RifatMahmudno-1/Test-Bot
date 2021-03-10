module.exports = function() {
  const fetch = require('node-fetch')
  const http = require('http');

  http.createServer(function(req, res) {
    res.write("Keep Alive! Don't die.");
    res.end();
  }).listen(3000);

  let url = `https://Test-Bot.rifatno1.repl.co`
  setInterval(() => {
    fetch(url)
      .then(res => res.text())
  }, 60000)
}
  /*const express = require("express");
  const app = express();
  const port = 3000;
  app.get("/", (req, res) => res.send("Keep Alive! Don't die."));

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  )*/