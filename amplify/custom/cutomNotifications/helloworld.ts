import type { Handler } from "aws-lambda";
import * as _ from "lodash";
import { Logger } from "@aws-lambda-powertools/logger";
const logger = new Logger();

export const handler: Handler = async (event) => {
  logger.info(event);
  logger.debug("debug");
  logger.error("error");

  console.log(_.isBoolean(2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Wold!`,
    }),
  };
};
