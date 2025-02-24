import { Stack } from "aws-cdk-lib";
import { CustomNotifications } from "./cutomNotifications/resource";
import { Construct } from "constructs";
import { CustomFuncLayers } from "./func-layer/resource";

export class CustomStack extends Stack {
  public readonly notice;
  public readonly cutomLayer;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.notice = new CustomNotifications(this, "CustomNotifications");
    this.cutomLayer = new CustomFuncLayers(this, "CustomFuncLayer");
  }
}
