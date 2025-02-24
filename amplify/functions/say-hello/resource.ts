import { defineFunction } from "@aws-amplify/backend";

export const sayHello = defineFunction({
  name: "say-hello",
  entry: "./handler.ts",
  environment: {
    POWERTOOLS_SERVICE_NAME: "say-hello",
    LOG_LEVEL: "INFO",
  },
  // layers: {
  //   "same-module":
  //     "arn:aws:lambda:ap-northeast-1:242201287677:layer:CustomFuncLayerHelloWold39007667:1",
  // },
});
