import type { Handler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
const logger = new Logger();

export const handler: Handler = async (event) => {
  logger.info(event);
  logger.debug("debug");
  logger.error("error");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello Wold!`,
    }),
  };
};
