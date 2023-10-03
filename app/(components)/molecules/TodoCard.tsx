interface TodoCardProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function TodoCard({ id, title, isCompleted }: TodoCardProps) {
  return (
    <div className="m-4 rounded p-4 border-solid border-2">
      <h2>{title}</h2>
      <p>{isCompleted ? "complete" : "in progress"}</p>
      <p>{id}</p>
    </div>
  );
}
