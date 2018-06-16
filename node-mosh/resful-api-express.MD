# REST - REpresentational State Transfer.
HTTP VERBS -- DB Operations
---------------------------
GET - READ

POST - CREATE

PUT - UPDATE

DELETE  - DELETE

### Express
-----------
```
  const express = require('express');

  const app = express();

  app.get('/', (req, res) => res.send('Hello World'));

  app.listen(PORT_NUMBER, () => console.log('Listening to to Port NUmber'));
```

1. We can pass route params as follows app.get('/posts/:id', (req, res) => { //can access this way req.params.id, query params as req. query.param})
useful package - nodemon (watching file changes and restart), joi (input validation)

Enviornment Variables
--------------------
is a variable which is kept in where the app runs

eg:- `const PORT = process.env.PORT || 3000`

can set port as follows via terminal `export PORT = 3001`