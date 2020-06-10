import express from "express";
import { buildSchema } from "graphql";
import graphqlHTTP from "express-graphql";
import { generateCode } from "./codegen/generate";

export const router = express.Router();

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return "Hello world!";
  },
};

generateCode(schema);

router.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
