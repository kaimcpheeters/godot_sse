const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // send a stream-open event immediately upon connection
  res.write('event: stream-open\n\n');

  // send an event every second
  setInterval(() => {
    res.write(`event: example data: "${new Date().toISOString()}"\n\n`);
  }, 1000);
}).listen(5000);
