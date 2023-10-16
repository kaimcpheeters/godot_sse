const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // send a stream-open event immediately upon connection
  res.write('event: stream-open\n\n');

  // send an event every second
  let intervalId = setInterval(() => {
    const eventData = new Date().toISOString();
    res.write(`event: example\n`);
    res.write(`data: "${eventData}"\n\n`);
  }, 1000);
}).listen(5000);
