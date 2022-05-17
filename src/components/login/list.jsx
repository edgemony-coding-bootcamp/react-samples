export const List = (props) => {
  const todos = props.todos || [];

  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          <input type="checkbox" checked={item.completed} /> {item.title}
        </li>
      ))}
    </ul>
  );
};
