import path from "node:path";

const fastify = require('fastify')();
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
  prefix: '/',
});

fastify.listen(3000, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
