const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(() => {
  // eslint-disable-next-line no-console
  console.log('Corriendo aplicación graphQL en http://localhost:4000/grapqhql');
});
