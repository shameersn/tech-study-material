### Request process pipeline 

will process and terminate a **request reponse cycle** by returning a result.

Middlewares -> functions that will executive between a reuest pipeline and pass controll to next function untill it terminate the requests.

// express middle wares
1. express.static('folder name'); // static files serve from this folder
2. **helmet** // helps to secure apps by securing request headers etc ..
3. **morgan** // helps to log based on configuration
4. **rc** // helps configuration of enviornment variables 
5. **config** // enviornment configurations
6. **debug** // debug package 
### Enviornements

process.env.NODE_ENV // return current enviornments
app.get('env') // also returns enviornment value and development by default

### Configuration 

can use config package to save enviornment variables and other objects in json files

### Debugging

can use debug module to log to specific app name spaces

### Templating Engins

1. Pug / Jade
2. Mustache
3. EJS

view engine can configured to express as follows

```
const express = require('express');
const app = express();
app.set('view engine', 'pug'); // will set default view engine and import the package
app.set('views', './views'); // set default views folder

```

### Database integration

1. 

### Authentication

1. 

### Folder structure

1. can seperates routes to other folder called routes and exports exports router object and app.use that router
2. also move middlewares to a folder named middlewares
