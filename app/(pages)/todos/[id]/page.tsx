import TodoDetails, { Todo } from "@/app/(components)/organisms/TodoDetails";
import React from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todoList: Todo[] = await res.json();

  return todoList.map((todo) => ({ id: todo.id.toString() }));
}

interface TodoDetailsPageParams {
  params: {
    id: string;
  };
}

export default function TodoDetailsPage({ params }: TodoDetailsPageParams) {
  return (
    <>
      <h1>Todo Details</h1>
      <TodoDetails id={params.id} />
    </>
  );
}
