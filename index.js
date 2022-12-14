// Variables and Cons
var express = require('express');
var cors = require('cors');
var path = require('path');

const { json, urlencoded } = express;

// App instance
var app = express();

// Server Listenig Port
const port = 8080;

// Cors Options for Server
const corsOptions = {
  origin: '*',
  optionSucessStatus: 200
}

// Set cors options
app.use(cors(corsOptions));

// Response Secret Value
app.use('/', (req, res)=> {
  console.log('REQ coming ..')
  res.send("Secret value is: ${process.env.APP_PORT} , ${process.env.API_KEY}")
  console.log('REQ response OK ..')
})

// Log messages
app.listen(port, () => {
  console.log('Server listening in port ${port}')
})
