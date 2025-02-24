"use client";
import { Schema } from "../../../amplify/data/resource";
import { Authenticator, Button, Link } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { client } from "@/utils/generateClient";

export default function TodoList() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items]);
      },
    });
    return () => sub.unsubscribe();
  }, []);

  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false,
    });
  };

  // const updateTodo = async (id: string) => {
  const updateTodo = async (todo: Schema["Todo"]["type"]) => {
    const { id, isDone } = todo;
    const content = window.prompt("Todo content?");
    if (!content) {
      alert("入力してください");
      return;
    }
    try {
      await client.models.Todo.update({
        id,
        content: content,
        isDone,
      });
    } catch (e) {
      alert(`An error occurred: ${e}`);
    }
  };

  const deleteTodo = async (id: string) => {
    await client.models.Todo.delete({
      id: id,
    });
  };

  return (
    <Authenticator>
      <div>
        <Link href="/func">func page</Link>
        <Button variation="primary" onClick={createTodo}>
          Add new todo
        </Button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <p onClick={() => updateTodo(todo)}>{todo.content}</p>
              <Button
                variation="primary"
                size="small"
                onClick={() => deleteTodo(todo.id)}
              >
                On Click
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Authenticator>
  );
}
