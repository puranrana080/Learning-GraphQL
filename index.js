import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
//typeDefs
import { typeDefs } from "./schema.js";
//resolvers
const resolvers = {
  Query: {
    reviews() {
      return db.reviews;
    },
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
  },
};

//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  //typeDefs
  //resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port ", 4000);
