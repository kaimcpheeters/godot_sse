const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // send an event every second
  setInterval(() => {
    res.write(`event: newexample data: "${new Date().toISOString()}"\n\n`);
  }, 1000);
}).listen(5000);
