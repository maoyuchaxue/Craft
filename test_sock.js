
const net = require('net');
const server = net.createServer((c) => {
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.on('data', (d) => {
      console.log(d.toString());
  })
});
server.on('error', (err) => {
  throw err;
});
server.listen(8866, () => {
  console.log('server bound');
});