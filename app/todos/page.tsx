import LoadingMessage from "@/app/(components)/atoms/LoadingMessage";
import TodoList from "@/app/(components)/organisms/TodoList";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      <Suspense fallback={<LoadingMessage />}>
        <TodoList />
      </Suspense>
    </>
  );
}
