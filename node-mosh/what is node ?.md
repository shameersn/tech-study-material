1. Node is a javascript run time, runs on chrom v8 engine. it is single threaded, event driven with asyncrous I/O.

2. Node can be used for high available realtime network application. It si not suitable for CPU intense application like video and image processing.

3. Node main strength is its packange manager NPM.

4. In node every file is processed in its own scope, it is done by a module wrapper function.

5. Node uses module.export object to export from a file, and we can use require('./fil') to export it to other files.

6. There is now window object is available in node, but there is a global object is present which contain console.log, setTimeout and other ...

7. Built In Modules
  1. Path - const path = require('path'); // use to get path information and also have methods like .parse etc...
  2. Os - const os = reuqire('os'); // use get os information, have methods like totalMemory() and freeMemory() etc ..
  3. FileSystem - const fs = reuqire('fs'); // use to interact with file system, methods like readdir() etc ...
  4. events - const EventEmitter = require('events'); // export the event emittor class, to use this need an instance
    const event = new EventEmitter();
    // listen to an event as follows -> event.on('customEvent', (args) => console.log('raised', args));
    // emit a event as follows => event.emit('customEvent', {id: 1, url: 'url'});
    // custom event class refer code custom events
  5. http - const http = require('http'); // which extends event emitor class
    we can creae a basic http server as foloow const server = http.createServer((req, res) => {
      console.log(res);
    });
    server.listen(3000);  

