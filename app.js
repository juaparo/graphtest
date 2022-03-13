const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const PORT = 3000;
const app = express();

/**
 * Import typeDefs and resolvers
 */
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

app.get("/", (req, res) => {
  res.redirect(`http://localhost:${PORT}/graphql`);
});

/**
 * Import database connection
 */
const { conncetDb } = require("./db");
conncetDb();

module.exports = app;

const start = async () => {
  /**
   * Apolloserver init
   */
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  await apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => {
    res.redirect(`http://localhost:${PORT}/graphql`);
  });

  app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
};

start();
