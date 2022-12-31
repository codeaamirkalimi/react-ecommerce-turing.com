import { useEffect, useState } from "react";

const TestComponent = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((user) => setUsers(user));
  }, []);
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};
export default TestComponent;
