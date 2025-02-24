import { sayHello } from "./functions/say-hello/resource";
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { CustomStack } from "./custom/cutom-stack";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  sayHello,
});

const customStack = new CustomStack(
  backend.createStack("CustomStack"),
  "CustomStack"
);

const authUserIamRole = backend.auth.resources.authenticatedUserIamRole;
customStack.notice.helloWorld.grantInvoke(authUserIamRole);

backend.addOutput({
  custom: {
    lambdaArn: customStack.notice.helloWorld.functionArn,
    lambdaName: customStack.notice.helloWorld.functionName,
  },
});
