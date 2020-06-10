import { generate } from "@graphql-codegen/cli";
import { GraphQLSchema, printSchema } from "graphql";
import queries from "./queries";

console.log({ queries });

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
  ).catch(console.log);

  // Typescript
  await generate(
    {
      schema: printSchema(schema),
      documents: "**/queries/index.ts",
      generates: {
        [process.cwd() + "/generated/index.tsx"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            {
              "typescript-react-apollo": {
                withHooks: true,
                withHOC: false,
                withComponent: false,
                apolloReactHooksImportFrom: "@apollo/client",
                apolloReactCommonImportFrom: "@apollo/client",
              },
            },
          ],
        },
      },
    },
    true
  ).catch(console.log);
}
