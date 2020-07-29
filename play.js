const net = require('net');

/**
 * Establishes connection with the game server
 */

 const connect = function() {
   const conn = net.createConnection( {
     host: '10.0.2.15',
     port: 50541
   });

  // Interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);

  return conn;
   })
};

 console.log('Connecting ...');
 
 connect();