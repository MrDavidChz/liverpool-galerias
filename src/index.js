import http from 'http';
import app from './express';
import { log } from './utils';

app.on('ready', () => {
  //Create HTTP server.
  const server = http.createServer(app);

  const port = validatePort(process.env.PORT);
  if (port) app.set('port', port);

  log(` environment -> ${app.get('env')} `)

  server.listen(port);
  server.on('error', catchError);
  server.on('listening', onListening);

  
  //validate the port
  function validatePort(val) {
    const port = parseInt(val, 10);

    if (Number.isNaN(port)) return val;
    if (port >= 0) return port;
    log(`port is ${port}`);
    return false;
  }

/**
 * Event listener for HTTP server "error" event.
 */
  function catchError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    // listen errors 
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Server start on port ${bind}  - environment ${app.get('env')} ` );
  }
});
