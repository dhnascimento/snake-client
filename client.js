const net = require('net');

const connect = function() {
  const conn = net.createConnection( {
    host: '10.0.2.15',
    port: 50541
  });

 // Interpret incoming data as text
 conn.setEncoding('utf8');

 conn.on('data', (data) => {
   console.log('Server says: ', data);
 
  })

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  
  });

  conn.on('connect', () => {
    conn.write('Name: DHN');
  });

  // conn.on('connect', () => {
  //   setTimeout( () => conn.write("Move: down"), 1000);
  // });

  // conn.on('connect', () => {
  //   setTimeout( () => conn.write("Move: down"), 1500);
  // });

  // conn.on('connect', () => {
  //   setInterval( () => conn.write("Move: left"), 2000);
  // });

   return conn;
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function() {

};

setupInput();

module.exports = { connect };