import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

async function startApolloServer(app: express.Express) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  // Additional middleware can be mounted at this point to run before Apollo.
  // app.use('*', jwtCheck, requireAuth, checkScope);

  // Mount Apollo middleware here.
  server.applyMiddleware({ app });
  // await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  return { server, app };
}

const port = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

startApolloServer(app);
