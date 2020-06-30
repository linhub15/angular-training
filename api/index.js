const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 3000;

const people = require("./controllers/people.js");

app
  .use(people.routes())
  .use(ctx => {
    ctx.body = 'hello world';
  });
console.log(`api running at http://localhost:${port}`);
app.listen(port);