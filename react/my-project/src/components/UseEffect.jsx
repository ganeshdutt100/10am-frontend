import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    return () => {};
  }, []);

  return (
    <div>
      <ul>
        {users.map((x) => (
          <li>
            name = {x.name} , userName = {x.username} , email = {x.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
