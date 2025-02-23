import { CustomNotifications } from "./custom/cutomNotifications/resouce";
import { sayHello } from "./functions/say-hello/resouce";
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  sayHello,
});

const customNotifaction = new CustomNotifications(
  backend.createStack("CustomNotifactions"),
  "CustomNotifactions"
);

const authUserIamRole = backend.auth.resources.authenticatedUserIamRole;
customNotifaction.helloWold.grantInvoke(authUserIamRole);

backend.addOutput({
  custom: {
    lambdaArn: customNotifaction.helloWold.functionArn,
    lambdaName: customNotifaction.helloWold.functionName,
  },
});
