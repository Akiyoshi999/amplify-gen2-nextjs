"use client";
import { Button, Link } from "@aws-amplify/ui-react";
import { client } from "@/utils/generateClient";
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import outputs from "@/../amplify_outputs.json";
import { fetchAuthSession } from "aws-amplify/auth";

export default function Func() {
  const sayHello = async () => {
    const { data, errors } = await client.queries.sayHello({
      name: "Amplify",
    });
    console.log(data);
    console.log(errors);
  };
  const helloWorld = async () => {
    const { credentials } = await fetchAuthSession();
    const client = new LambdaClient({
      credentials,
      region: outputs.auth.aws_region,
    });
    const command = new InvokeCommand({
      FunctionName: outputs.custom.lambdaName,
      // Payload: JSON.stringify({ name: "Amplify" }),
    });
    const { Payload } = await client.send(command);
    if (Payload) {
      const res = JSON.parse(new TextDecoder().decode(Payload));
      console.log(res);
    }
  };

  return (
    <div>
      <h1>Func</h1>
      <Link href="/todolist">todo list page</Link>
      <Button variation="primary" onClick={sayHello}>
        Func Execution
      </Button>
      <br />
      <br />
      <Button variation="primary" onClick={helloWorld}>
        Cutom Func Execution
      </Button>
    </div>
  );
}
