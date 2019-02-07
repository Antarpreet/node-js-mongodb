# node-js-mongodb
A simple Todo manager using mongoose and express, tested with Postman and mocha, expect.

### Access points:
- '/todos' - GET <br/> - checks for 'x-auth' header in request, if found returns all the todos of the user otherwise returns 401. <br/> <br/>
- '/todos' - POST <br/> - checks for 'x-auth' header in request, if found creates a new todo in mongodb with body as {text: 'new Todo description here'} for the user, otherwise returns 401. <br/> <br/>
- '/todos/:id' - GET <br/> - checks for 'x-auth' header in request, if found returns the todo with 'id', otherwise returns 401 or 404 or 400. <br/> <br/>
- '/todos/:id' - DELETE <br/> - checks for 'x-auth' header in request, if found deletes the todo with 'id', otherwise returns 401 or 404 or 400. <br/> <br/>
- '/todos/:id' - PATCH <br/> - checks for 'x-auth' header in request, if found updates the todo with 'id' with new 'text' - if passed - and 'completed' - if passed, otherwise returns 401 or 404 or 400. <br/> <br/>
- '/users' - POST <br/> - checks for 'email' and 'password' property in request body, if found creates a new user and returns an auth token in 'x-auth' header, otherwise returns 400. <br/> <br/>
- '/users/me' - GET <br/> - checks for 'x-auth' header in request, if found returns the user, otherwise returns 401. <br/> <br/>
- '/users/login' - POST <br/> - checks for 'email' and 'password' property in request body, if found login the user and returns a new auth token in 'x-auth' header, otherwise returns 400. <br/> <br/>
- '/users/me/token' - DELETE <br/> - checks for 'x-auth' header in request, if found logout the user and deletes token from mongodb, otherwise returns 401 or 400. <br/>
