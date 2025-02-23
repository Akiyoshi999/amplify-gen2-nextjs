import { defineFunction } from "@aws-amplify/backend";

export const sayHello = defineFunction({
  name: "say-hello",
  entry: "./handler.ts",
  environment: {
    POWERTOOLS_SERVICE_NAME: "say-hello",
    LOG_LEVEL: "INFO",
  },
});
