// require est un mot clef necessaire pour importer un paquet
const Koa = require('koa');


// rendre disponbile pour d'autres fichiers l'applicatin koa 
const app = module.exports = new Koa();

const koaBody = require('koa-body');
app.use(koaBody({ multipart: true }));

// declaration et utilisation d'une fonction qui retournera Hello-World
app.use(async function(ctx) {
  // ctx.body c'est le contenu
  // const body = ctx.request.body;
  // console.log(body)
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  // ctx.body = 'Hello-World-Test2';
});

// demarrer l'application
if (!module.parent) app.listen(3000);