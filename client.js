const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // Interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
 
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  
  });

  conn.on('connect', () => {
    conn.write('Name: DHN');
  });



  return conn;
};

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */


module.exports = { connect };