"use client";

import { useState } from "react";

export default function CounterWithButton() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-2 mt-5">
      <p className="m-auto">{counter}</p>
      <button
        className="border-2 border-black p-2"
        onClick={() => setCounter(counter + 1)}
      >
        increase counter
      </button>
      <button
        className="border-2 border-black p-2"
        onClick={() => setCounter(counter - 1)}
      >
        decrease counter
      </button>
    </div>
  );
}
