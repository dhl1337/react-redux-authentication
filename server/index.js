const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server is listening on ${port}`);