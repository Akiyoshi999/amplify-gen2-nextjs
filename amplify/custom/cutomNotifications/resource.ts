import * as url from "node:url";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { RetentionDays } from "aws-cdk-lib/aws-logs";

export class CustomNotifications extends Construct {
  public readonly helloWorld: lambda.NodejsFunction;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // define your custom notifications here
    this.helloWorld = new lambda.NodejsFunction(this, "HelloWold", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: url.fileURLToPath(new URL("helloworld.ts", import.meta.url)),
      environment: {
        Powertools_SERVICE_NAME: "helloWorld",
        LOG_LEVEL: "INFO",
      },
      logRetention: RetentionDays.ONE_DAY,
    });
  }
}
