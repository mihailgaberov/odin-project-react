import React from "react";
import { useState } from "react";

export default function InfiniteLoop() {
  const [count, setCount] = useState(0);

  setCount(count + 1);

  console.log(">>> rendering count: ", count);
  return <h1>{count}</h1>;
}
