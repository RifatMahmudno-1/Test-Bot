module.exports = function() {
  const fetch = require('node-fetch')
  const http = require('http');

  http.createServer(function(req, res) {
    res.write("Keep Alive! Don't die.");
    res.end();
  }).listen(3000);

  let url = `https://Test-Bot.rifatno1.repl.co`
  function auto() {
    setInterval(() => {
      fetch(url)
        .then(res => res.text())
    }, 60000)
  }

  fetch(url).then(res => res.text()).then(okay =>{
    if (okay === `Keep Alive! Don't die.`) {
      auto()
    }else{
      console.log(`Example app listening at http://localhost:3000`)
    }
  })
  .catch(function(){console.log('Some error has occured in http request.')})
}
  /*const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Keep Alive! Don't die."));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)*/