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
    review(_,args){
        return db.reviews.find((review)=>review.id===args.id)
    },
    games() {
      return db.games;
    },
    game(_,args){
        return db.games.find((game)=>game.id===args.id)
    },
    authors() {
      return db.authors;
    },
    // author(parent,args,context)
    author(_,args){
        return db.authors.find((author)=>author.id===args.id)
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
