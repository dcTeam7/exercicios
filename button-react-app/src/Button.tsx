import React, { useState } from "react";

export default function Button(props: { count: number }) {
  const [count, setCount] = useState(props.count);

  return <button onClick={() => setCount(count + 1)}>count is {count}</button>;
}
