// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 'd') {
    connection.write("Move: down");
  } else if (key === 'y') {
    connection.write("Say: YoY");
  } else if (key === 't') {
    connection.write("Say: Terrific");
  }
     
};


module.exports = { setupInput };