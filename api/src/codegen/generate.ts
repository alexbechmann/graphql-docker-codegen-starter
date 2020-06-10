import { generate } from "@graphql-codegen/cli";
import { GraphQLSchema, printSchema } from "graphql";

export async function generateCode(schema: GraphQLSchema) {
  // Introspect
  await generate(
    {
      schema: printSchema(schema),
      generates: {
        [process.cwd() + "/generated/introspect.json"]: {
          plugins: ["fragment-matcher"],
        },
      },
    },
    true
  );

  // Typescript
  await generate(
    {
      schema: printSchema(schema),
      documents: "**/queries.graphql",

      generates: {
        [process.cwd() + "/generated/types.d.ts"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            // "typescript-react-apollo",
          ],
        },
      },
    },
    true
  );
}
