import * as path from "path";
import * as url from "url";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";

export class CustomFuncLayers extends Construct {
  public readonly layer;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

    this.layer = new lambda.LayerVersion(this, "HelloWold", {
      compatibleRuntimes: [lambda.Runtime.NODEJS_20_X],
      code: lambda.AssetCode.fromAsset(
        path.join(__dirname, "layer", "layer_content.zip")
      ),
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
