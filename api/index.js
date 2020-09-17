const Koa = require('koa');
const cors = require('@koa/cors');
const jwt = require('koa-jwt');

// Controllers
const people = require("./controllers/people.js");
const genders = require("./controllers/genders.js");
const auth = require("./controllers/auth.js");
const authService = require('./services/auth.service.js');

// Initialize Web Server
const app = new Koa();
const port = 3000;

app
  .use(cors())
  //.use(jwt({ secret: authService.secret }).unless({ path: [/^\/auth/] }))
  .use(people.routes())
  .use(genders.routes())
  .use(auth.routes())
  .use(ctx => {
    ctx.body = 'hello world';
  });
console.log(`api running at http://localhost:${port}`);
app.listen(port);