import type { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  const { name } = event;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}!`,
    }),
  };
};
