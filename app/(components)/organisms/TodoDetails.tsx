import TodoCard from "@/app/(components)/molecules/TodoCard";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodoDetails = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: {
      revalidate: 30, // setting to 0 will not cache the data.
    },
  });

  return res.json();
};

interface TodoDetailsProps {
  id: string;
}

export default async function TodoDetails({ id }: TodoDetailsProps) {
  const todoDetails: Todo = await getTodoDetails(id);

  // * use this if generateStaticParams can't be used
  // const todoDetails: {} | Todo = await getTodoDetails(id);
  // if (!("title" in todoDetails)) return notFound();

  return (
    <TodoCard
      id={todoDetails.id}
      title={todoDetails.title}
      isCompleted={todoDetails.completed}
    />
  );
}
