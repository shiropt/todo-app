import { useGetTodoListQuery } from "./modules/todo/api";

function App() {
  const { data, error, isLoading } = useGetTodoListQuery("");

  if (isLoading)
    return <div style={{ color: "red", background: "blue" }}>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <>
      {data?.data.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
