import React, { useState, useEffect } from "react";

const DependencyDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("No dependency array  ");
  });

  useEffect(() => {
    console.log("Empty dependency array  ");
  }, []);

  useEffect(() => {
    console.log(`Count ${count} `);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(() => count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(() => count - 1)}>-</button>
    </div>
  );
};

export default DependencyDemo;
