"use client";
import { Button, Link } from "@aws-amplify/ui-react";
import { client } from "@/utils/generateClient";

export default function Func() {
  const sayHello = async () => {
    const { data, errors } = await client.queries.sayHello({
      name: "Amplify",
    });
    console.log(data);
    console.log(errors);
  };

  return (
    <div>
      <h1>Func</h1>
      <Link href="/todolist">todo list page</Link>
      <Button variation="primary" onClick={sayHello}>
        Func Execution
      </Button>
    </div>
  );
}
