"use client";
import { Authenticator, Button } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <h1>Hello {user?.username}</h1>
          <Button variation="primary" onClick={signOut}>
            Sign out
          </Button>
        </>
      )}
    </Authenticator>
  );
}
