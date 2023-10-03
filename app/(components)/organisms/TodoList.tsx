import TodoCard from "@/app/(components)/molecules/TodoCard";
import { Todo } from "@/app/(components)/organisms/TodoDetails";

const getTodoList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: {
      revalidate: 30, // setting to 0 will not cache the data.
    },
  });

  return res.json();
};

export default async function TodoList() {
  const todoList: Todo[] = await getTodoList();

  return (
    <div className="grid grid-cols-3">
      {todoList.map(({ id, title, completed }) => (
        <TodoCard key={id} id={id} title={title} isCompleted={completed} />
      ))}
    </div>
  );
}
