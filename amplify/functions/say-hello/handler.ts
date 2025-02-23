import type { Handler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
const logger = new Logger();

export const handler: Handler = async (event) => {
  const { name } = event;
  logger.info(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}!`,
    }),
  };
};
